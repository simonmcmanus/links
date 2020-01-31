module.exports = function (post) {

    var tags =  post.tags
    .filter(function(tag) {
        return tag.length > 0
    })
    .map(function(tag) {
        return {

            href: '/tags/' + tag + '/' + 'index.html',
            innerHTML: tag
        }
    })

    if(tags.length === 0 ) {
        tags = [ false ]
    }

    return {
        '.title': post.title,
        url: 'index.html',
        '.date': post.date,
       // '.dateUrl': moment(new Date(post.date)).format(urlFormat),
        '.summary': post.summary || false,
        '.tag': tags,
        'a.created': {
            href: '/' + post.date + '/index.html',
            innerHTML: post.date
        },
        'a.link': {
            href: '/posts/' + post.titleSlug + '/' + 'index.html'
        }
    }

}
