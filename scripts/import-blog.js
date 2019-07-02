
var fs = require('fs')
var moment = require('moment')
var chalk = require('chalk')
var urlSafe = require('../lib/url-safe')
var TurndownService = require('turndown')

var turndownService = new TurndownService({
  codeBlockStyle: 'fenced'
})

turndownService.addRule('pre', {
  filter: ['pre', 'code'],
  replacement: function (content) {
    return '\n```js\n' + content + '\n```\n'
  }
})

const path = require('path')

const writeFile = function (fileName, contents) {
  fileName = urlSafe(fileName)
  const folder = path.dirname(fileName)

  console.log(folder)
  fs.mkdir(__dirname + '/../posts/' + folder, { recursive: true }, function () {
    const fullPath = __dirname + '/../posts/' + fileName

    fs.writeFile(fullPath, contents, function (e, d) {
      console.log(chalk.blue('Updating blog ', fullPath), e, d)
      console.log(chalk.green('  ok'))
    })
  })
}

var postSelectors = require('../posts').filter((post) => {
  return (
    post.title !== '' &&
    post.created !== null &&
    post.title !== null &&
        post.content !== '' &&
        post.title.slice(0, 10) !== 'links for '
  )
})
  . forEach((post) => {
    const year = moment(new Date(post.created)).format('YYYY/MM/DD')
    const fileName = post.title + '.md'

    var markdown = turndownService.turndown(post.content.replace(/\n/g, '<br />'))

    const content = `---
tags: ${post.tags || ''}
title: ${post.title}
date: ${post.created}
---
${markdown}
`
    writeFile(fileName, content)
  })
