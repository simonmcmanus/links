var _ = require('lodash')
var fs = require('fs')
var path = require('path')
const matter = require('gray-matter')
var urlSafe = require('../lib/url-safe')
var read = require('fs-readdir-recursive')
var moment = require('moment')
var urlFormat = 'YYYY-MM-DD'

var showdown = require('showdown')
var converter = new showdown.Converter()
var dirPath = path.join(__dirname + '/../posts/')

const file = './engineering-principles.md'
const postPath = path.join(dirPath, file)
const post = matter.read(postPath)


const tags = !post.data.tags ? [false] : post.data.tags
    .split(',')
let safeUrl = urlSafe(post.data.title)

const url = '/posts/' + moment(new Date(post.data.date)).format('YYYY/MM/DD') + '/' + safeUrl + '/'
const json = {
    titleSlug: safeUrl,
    title: post.data.title,
    date: moment(new Date(post.data.date)).format(urlFormat),
    url: safeUrl,
    markup: converter.makeHtml(post.content),
    tags: tags,
}


console.log(JSON.stringify(json, null, " "))