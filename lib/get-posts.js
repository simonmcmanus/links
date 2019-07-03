
var _ = require('lodash')
var fs = require('fs')
var path = require('path')
const matter = require('gray-matter')
var urlSafe = require('../lib/url-safe')
var read = require('fs-readdir-recursive')
var moment = require('moment')
var chalk = require('chalk')
var urlFormat = 'YYYY-MM-DD'

var showdown = require('showdown')
var converter = new showdown.Converter()

const _readDir = (dirPath) => {
  return read(dirPath)
}

// hard coded url maps
const urlMaps = {
  'include-a-branch-from-a-private-git-repo-into-npm-packagejson': 'include-a-branch-from-a-private-git-repo-into-npm-package-json'
}
// special url rules to maintain url mapping.

module.exports = function () {
  var dirPath = path.join(__dirname + '/../posts/')
  const files = _readDir(dirPath)
  const parsed =
        files
          .map((file) => {
            const postPath = path.join(dirPath, file)
            const post = matter.read(postPath)
            return post
          }).sort((a, b) => {
            return new Date(a.data.date).getTime() > new Date(b.data.date).getTime()
          }).map((post) => {
            if (!post.data.title) {
              return {}
            }

            const tags = !post.data.tags ? [false] : post.data.tags
              .split(',')
              .map(function (item) {
                return {
                  '.tag': {
                    innerHTML: item.replace(/ /g, '&nbsp;'),
                    href: '/tags/' + item.replace(/ /g, '-') + '/index.html'
                  }
                }
              })

            let safeUrl = urlSafe(post.data.title)

            if (urlMaps[safeUrl]) {
              console.log('use safe')
              safeUrl = urlMaps[safeUrl] // allows hard coding
            }

            console.log(safeUrl)
            const url = '/posts/' + moment(new Date(post.data.date)).format('YYYY/MM/DD') + '/' + safeUrl + '/'
            // const url = '/posts/' + safeUrl + '/'
            return {
              '.title': post.data.title,
              url: url + 'index.html',
              '.date': post.data.date,
              '.dateUrl': moment(new Date(post.data.date)).format(urlFormat),
              '.summary': converter.makeHtml(post.content),
              '.tags': {
                data: tags,
                component: 'tag'
              },
              'a.created': {
                href: url,
                innerHTML: moment(new Date(post.data.date)).format('MMMM Do YYYY')
              },
              'a.link': {
                href: url
              }
            }
          })
  return parsed
}
