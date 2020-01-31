module.exports = function (post) {

    return {
        '.title': post.title,
        url: 'index.html',
        '.date': post.date,
       // '.dateUrl': moment(new Date(post.date)).format(urlFormat),
        '.summary': post.content,
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

}
