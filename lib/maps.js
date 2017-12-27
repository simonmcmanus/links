exports.tags = (post) => {


    return {
        title: post.title,
        tags: post.tags,
        url: post.url
    }
};


exports.postSummary = (post) => {

    return {
        '.title': post.title,
        '.dateUrl': post.created,
        url: post.url,
        'a.link': {
            href: post.url
        }
    }
};

exports.linksSummary = (link) => {

    console.log('links', link)

    return {
        '.title': link.title,
        '.dateUrl': link.created,
        url: link.url,
        'a.link': {
            href: link.url
        }
    }
};


exports.postDetail = (post, index, posts) => {

    var tags;
    var showTags = true;

    if(post.tags.length) {

        tags = post.tags.map((tag) => {
            return {
                innerHTML: tag.replace(/ /g, '&nbsp;'),
                href: "/tags/" + tag + "/index.html"
            }
        })
    }else {
        showTags = false;
    }


    return {
        url: post.url,
        '.title': post.title,
        '.created': post.created,
        '.summary': post.content,
        '.tag': tags,
        '.tags': showTags,
        '.next': posts[index + 1] ? { href: posts[index + 1].url } : false,
        '.previous': posts[index - 1] ? { href: posts[index - 1].url } : false
    }
};

