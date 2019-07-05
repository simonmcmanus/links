
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
    var selectors = data.body
      .filter((link) => {
        return (link.title, link.url)
      })
      .map((link) => {
        var tags = [ false ] // if no tags remove the list.
        if (link.tags !== '') {
          tags = link.tags.split(',').map(function (item) {
            return {
              innerHTML: item.replace(/ /g, '&nbsp;'),
              href: '/tags/' + item.replace(/ /g, '-') + '/index.html'
            }
          })
        }

        return {
          '.title': link.title || 'sd',
          '.dateUrl': moment(new Date(link.created)).format(urlFormat),
          '.summary': (link.summary !== '') ? encoder.htmlEncode(link.summary) : false,
          '.tag': tags,
          'a.created': {
            href: '/links/' + moment(new Date(link.created)).format(urlFormat) + '/index.html',
            innerHTML: moment(new Date(link.created)).format('MMMM Do YYYY')
          },
          img: {
            src: 'https://www.google.com/s2/favicons?domain=' + url.parse(link.url).hostname
          },
          'a.link': {
            href: link.url.slice('/')
          }
        }
      })

    fs.writeFile(__dirname + '/links.json', JSON.stringify(selectors, null, 4), function (e, d) {
      console.log(chalk.blue('Fetching latest links...'))
      console.log(chalk.green('  ok'))
    })
  })

//   var postSelectors = require('./posts').filter((post) => {
//     return (
//         post.title !== '' &&
//         post.content !== '' &&
//         post.title.slice(0, 10) !== 'links for '
//     )
//   }).map((post) => {

//     return {
//         '.title': post.title,
//         url: '/posts/' + urlSafe(post.title) + '/index.html',
//         '.dateUrl':  moment(new Date(post.created)).format(urlFormat),
//         '.summary': post.content,
//         '.tag': post.tags.split(',').map(function(item) {
//             return {
//                 innerHTML: item.replace(/ /g, '&nbsp;'),
//                 href: '/tags/' + item.replace(/ /g, '-')  + '/index.html'
//             }
//         }),
//         'a.created': {
//             href: '/posts/' + urlSafe(post.title) + '/index.html',
//             innerHTML: moment(new Date(post.created)).format('MMMM Do YYYY')
//         },
//         'a.link': {
//             href: '/posts/' + urlSafe(post.title) + '/index.html'
//         }
//     }
//   });

//   fs.writeFile(__dirname + '/posts-selectors.json', JSON.stringify(  postSelectors, null, 4), function (e, d) {
//     console.log(chalk.blue('Updating blog posts'))
//     console.log(chalk.green('  ok'))
// })
