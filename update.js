

var superagent = require('superagent')
var fs = require('fs')
var moment = require('moment')
var chalk = require('chalk')

superagent
  .get('https://5vu7ki44h5.execute-api.eu-west-2.amazonaws.com/dev/links')
  .end(function (error, data) {

    var selectors = data.body
    .filter((link) => {
        return (link.title, link.url)
    })
    .map((link) => {
        return {
            '.title': link.title,
            '.summary': link.summary,
            '.created': moment(link.created).format('MMMM Do YYYY'),
            'a': {
                href: link.url
            }
        }
    })

     fs.writeFile(__dirname + '/links.json', JSON.stringify(selectors, null, 4), function (e, d) {
         console.log(chalk.blue('Fetching latest links...'))
         console.log(chalk.green('  ok'))
     })
  });