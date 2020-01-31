
var superagent = require('superagent')
var fs = require('fs')
var moment = require('moment')
var chalk = require('chalk')
var urlSafe = require('../lib/url-safe')
var url = require('url')

var Encoder = require('node-html-encoder').Encoder
var encoder = new Encoder('entity')
var urlFormat = 'YYYY-MM-DD'

superagent
  .get('https://5vu7ki44h5.execute-api.eu-west-2.amazonaws.com/dev/links')
  .end(function (error, data) {
    var links = data.body
      .filter((link) => {
        return (link.title, link.url)
      })
      .map((link) => {
        const tags = link.tags.split(',')
        if(tags) {
          link.tags = tags
        }
        link.date = link.created.substring(0, 10)
        return link
      })
    fs.writeFile(__dirname + '/../lists/links.json', JSON.stringify(links, null, 4), function (e, d) {
      if(e) throw e;
      console.log(chalk.blue('Fetching latest links...'))
      console.log(chalk.green('  ok'))
    })
  })
