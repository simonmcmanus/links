

var superagent = require('superagent')
var fs = require('fs')
var moment = require('moment')


superagent
  .get('https://5vu7ki44h5.execute-api.eu-west-2.amazonaws.com/dev/links')
  .end(function (error, data) {
    console.log('links', data.body)

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
         console.log(e, d)
         console.log('Data file has been updated')
     })
  });