
var superagent = require('superagent')
var fs = require('fs')
var moment = require('moment')
var chalk = require('chalk')

var Encoder = require('node-html-encoder').Encoder
var encoder = new Encoder('entity')

superagent
  .get('https://5vu7ki44h5.execute-api.eu-west-2.amazonaws.com/dev/links')
  .end(function (error, data) {

    var selectors = data.body
    .filter((link) => {
        return (link.title, link.url)
    })
    .map((link) => {
        var urlFormat ='YYYY-MM-DD';
        var tags = [ false ]; // if no tags remove the list.
        if(link.tags !== '') {

            tags = link.tags.split(',').map(function(item) {
                return {
                    innerHTML: item,
                    href: '/tags/' + item.replace(/ /g, '-')  + '/index.html'
                }
            });
        }




        return {
            '.title': link.title || 'sd',
            '.dateUrl':  moment(link.created).format(urlFormat),
            '.summary': (link.summary !== '') ? encoder.htmlEncode(link.summary) : false,
            '.tag': tags,
            'a.created': {
                href: '/links/' + moment(link.created).format(urlFormat) + '/index.html',
                innerHTML: moment(link.created).format('MMMM Do YYYY')
            },
            'a.link': {
                href: link.url
            }
        }
    })

     fs.writeFile(__dirname + '/links.json', JSON.stringify(selectors, null, 4), function (e, d) {
         console.log(chalk.blue('Fetching latest links...'))
         console.log(chalk.green('  ok'))
     })
  });