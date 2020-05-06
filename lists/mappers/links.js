
module.exports = function (post) {

    const generateTags = (tags) => {
    
        if(!tags || tags.length === 0 ) {
            return  [ false ] 
        }
        tags = tags
            .filter(function(tag) {
                return tag.length > 0
            })
            .map(function(tag) {
                return {
    
                    href: '/tags/' + tag + '/' + 'index.html',
                    innerHTML: tag
                }
            }) 
        if(!tags || tags.length === 0 ) {
            return  [ false ] 
        }
        return tags
    }
    
    if(!post) {
        return {
            ".title": 'No Links'
        }
    }
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
    return out;
}
