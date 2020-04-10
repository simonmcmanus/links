const generateTags = (tags) => {
    
    if(!tags || tags.length === 0 ) {
        return  [ false ] 
    }
    var a= tags
        .filter(function(tag) {
            console.log('tag', tag, tag.length > 0)
            return false
            return tag.length > 0
        })
        .map(function(tag) {
            return {

                href: '/tags/' + tag + '/' + 'index.html',
                innerHTML: tag
            }
        }) 
        console.log('a', a)
        return a;
}

module.exports = function (post) {
    var out = {
        '.title': post.title,
        '.date': post.date,
       // '.dateUrl': moment(new Date(post.date)).format(urlFormat),
        '.summary': post.summary || false,
        '.tag': generateTags(post.tags) ,
        'a.created': {
            href: '/' + post.date + '/index.html',
            innerHTML: post.date
        },
        'a.link': {
            target: '_blank',
            href: post.url
        }
    }
    console.log('-<', out);
    return out;
}
