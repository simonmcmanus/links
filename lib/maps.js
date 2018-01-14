// exports.tags = (post) => {


//     return {
//         title: post.title,
//         tags: post.tags,
//         url: post.url
//     }
// };


exports.postSummary = (post) => {

    var summaryLimit = 200;
    var isLongPost = post.content.length > summaryLimit;
    var ending = (isLongPost) ? '...' : '';

    return {
        '.title': post.title,
        '.dateUrl': post.created,
        '.tags': exports.tags(post.tags),
        '.summary': post.content.slice(0, summaryLimit) + ending,
        url: post.url,
        'a.link': {
            href: post.url
        },
        '.fullPost': isLongPost
    }
};

exports.linksSummary = (link) => {

    return {
        '.title': link.title,
        '.created': {
            href: '/date/df',
            innherHTML: link.created
        },
        '.tag': exports.tags(link.tags),
        '.summary': link.summary,
        url: link.url,
        'a.link': {
            href: link.url
        }
    }
};


exports.tags = (tags) => {
  //  var tags = [false]; // if no tags remove the list.
//

    if (!tags.length) {
        return false;
    }

    return tags.map(exports.tag)

};

exports.tag = function(tag) {
    return {
        innerHTML: tag.replace(/ /g, '&nbsp;'),
        href: "/tags/" + tag + "/index.html"
    }
}

exports.postDetail = (post, index, posts) => {

    var tags;
    var showTags = true;




    return {
        url: post.url,
        '.title': post.title,
        '.created': post.created,
        '.summary': post.content,
        '.tag': exports.tags(post.tags),
        '.next': posts[index + 1] ? { href: posts[index + 1].url } : false,
        '.previous': posts[index - 1] ? { href: posts[index - 1].url } : false
    }
};

