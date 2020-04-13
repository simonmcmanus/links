// var generateTags = function(tags) {
//     if(!mapped.length ) {
//         return [ false ]
//     }
//     const mapped = tags
//     .filter(function(tag) {
//         return tag.length > 0
//     })
//     .map(function(tag) {
//         return {
//             href: '/tags/' + tag + '/' + 'index.html',
//             innerHTML: tag
//         }
//     })

//     if(!mapped.length ) {
//         return [ false ]
//     }
//     return mapped
// }

// module.exports = function (post) {


//     var tags = generateTags(post.tags)
//     return {
//         '.title': post.title,
//         url: 'index.html',
//         '.date': post.date,
//        // '.dateUrl': moment(new Date(post.date)).format(urlFormat),
//         '.summary': post.markup,
//         '.tag': tags,
//         'a.created': {
//             //href: url,
//             innerHTML: post.date
//         },
//         'a.link': {
//             href: '/posts/' + post.titleSlug + '/' + 'index.html'
//         }
//     }

// }
