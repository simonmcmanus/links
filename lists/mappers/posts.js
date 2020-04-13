module.exports = function (post) {

    if(post === null) {
        return {
        }
    }

    var post = {
        '.title': post.title,
        url: 'index.html',
        '.date': post.date,
    // '.dateUrl': moment(new Date(post.date)).format(urlFormat),
        '.summary': post.markup,
        '.tag':  post.tags.map((tag) => {
            return {
                "href": "/tags/" + tag + "/index.html",
                "innerHTML": tag
            }
        }) ,
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
