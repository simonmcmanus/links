
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

            return {
              '.title': post.data.title,
              url: '/posts/' + urlSafe(post.data.title) + '/index.html',
              '.date': post.data.date,
              '.dateUrl': moment(new Date(post.data.date)).format(urlFormat),
              '.summary': converter.makeHtml(post.content),
              '.tags': {
                data: tags,
                component: 'tag'
              },
              'a.created': {
                href: '/posts/' + urlSafe(post.data.title) + '/index.html',
                innerHTML: moment(new Date(post.data.date)).format('MMMM Do YYYY')
              },
              'a.link': {
                href: '/posts/' + urlSafe(post.data.title) + '/index.html'
              }
            }
          })
  return parsed
}
