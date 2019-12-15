
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
        let safeUrl = urlSafe(post.data.title)

        if (urlMaps[safeUrl]) {
            safeUrl = urlMaps[safeUrl] // allows hard coding
        }

        const url = '/posts/' + moment(new Date(post.data.date)).format('YYYY/MM/DD') + '/' + safeUrl + '/'
        return {
            titleSlug: safeUrl,
            title: post.data.title,
            date: moment(new Date(post.data.date)).format(urlFormat),
           // url: url,
            markup: converter.makeHtml(post.content),
            tags: tags,
        }
    })


    fs.writeFile(process.cwd() + '/lists/posts.json', JSON.stringify(parsed, null, 4), (e) => {
        console.log(e)
    })
//console.log(parsed)

