module.exports = function (post) {

    var post = {
        '.title': post.title,
        url: 'index.html',
        '.date': post.date,
    // '.dateUrl': moment(new Date(post.date)).format(urlFormat),
        '.summary': post.markup,
        '.tags': {
            //data: tags,
            component: 'tag'
        },
        'a.created': {
            //href: url,
            innerHTML: post.date
        },
        'a.link': {
            href: '/posts/' + post.titleSlug + '/' + 'index.html'
        }
    }
    return post

}
