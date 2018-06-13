
const links = require('./links')
const posts = require('./posts-selectors')
const SpecData = require('./lib/datas')







const postsSummary = posts.map((link) => {
    delete link['.summary']
    return link
});

var tags = require('./lib/tags')(links.concat(postsSummary));
const urlSafe = require('./lib/url-safe');
const allLinks = links.slice(0)
links.reverse();
module.exports = {
    "/": {
        page: 'home',
        spec: {
            title: 'Simon McManus'
        }
    },
    "/talks.html": {
        page: 'talks',
        spec: {
            title: 'Talks from Simon McManus'
        }
    },
    "/hire.html": {
        page: 'hire',
        spec: {
            title: 'Hire Simon McManus'
        }
    },
    "/links.html": {
        page: 'links',
        spec: {
            title: 'Recent links from Simon McManus',
            ".links-title": '10 most recent links',
            ".links_holder": {
                component: 'link',
                data: allLinks.slice(-10).reverse()
            },
            "meta[name=description]": {
                content: 'Links from Simon McManus'
            },
            "meta[name=keywords]": {
                content: 'links'
            }
        }
    },
    "/posts.html": {
        page: 'posts',
        spec: {
            title: 'Recent posts from Simon McManus',
            ".page-title": 'Blog posts',
            ".holder": {
                component: 'posts',
                data: posts.slice(50).reverse()
            },
            "meta[name=description]": {
                content: 'Links from Simon McManus'
            },
            "meta[name=keywords]": {
                content: 'links'
            }
        }
    },




    // "/posts/:title/index.html": {
    //     page: 'post',
    //     data: [
    //         {
    //             id: 1,
    //             url: '/hi.html',
    //             title: 'hi there',
    //             '.title': 'hi there',
    //             '.summary': 'this is the full summary'

    //         },
    //         {
    //             id: 2,
    //             url: '/bye.html',
    //             title: 'bye there',
    //             '.title': 'bye there',
    //             '.summary': 'this is the full summary of bye'
    //         }
    //     ],
    // },


    "/posts/:title/index.html": {
        page: 'post',
        data: posts,
        spec: {
            title: ':group',
            ".links-title": ':group',
            "meta[name=description]": {
                content: ' :group'
            },
            "meta[name=keywords]": {
                content: ':group'
            }
        }
    },



    "/links/:date/index.html": {
        page: 'links',
        data: links,
        url: function(group) {
            return '/links/' + group + '/index.html'
        },
        group: (pages, item) => {
            created = item['.dateUrl'];
            if(!pages[created]) {
                pages[created] = [];
            }
            pages[created].push(item);
            return pages;
        },
        spec: {
            title: 'Links for :group',
            ".links-title": 'Links for :group',
            "meta[name=description]": {
                content: 'Links for :group'
            },
            "meta[name=keywords]": {
                content: ':group'
            },
            ".links_holder": {
                component: 'link'
            }
        }
    },
    "/tags/index.html": {
        page: 'links',
        spec: {
            title: 'Tags from Simon McManus',
            ".links-title": 'Tags from Simon McManus',
            ".links_holder": {
                component: 'tag',
                data: {
                    '.tag': tags
                }
            },
            "meta[name=description]": {
                content: 'Tags from Simon McManus'
            },
            "meta[name=keywords]": {
                content: 'tags,links'
            },

        }

    },
    "/tags/:tag/index.html": {
        page: 'links',
        data: links,
        url: function(group) {
            return '/tags/' + urlSafe(group) + '/index.html'
        },
        group: (pages, item) => {
            if(!item['.tag']) {
                return pages
            }

            const tags = item['.tag']
            tags.forEach(function(tag) {
                var tagName = tag.innerHTML  // hacky
                if(!pages[tagName]) {
                    pages[tagName] = [];
                }
                pages[tagName].push(item);
            })
            return pages;
        },
        spec: {
            title: ':group | Simon McManus',
            ".links-title": 'Links tagged:  :group',
            "meta[name=description]": {
                content: 'Links tagged :group'
            },
            "meta[name=keywords]": {
                content: ':group'
            },
            ".links_holder": {
                component: 'link'
            }
        }

    },

    defaultSpec: {
    },
    options: {
        outputDir: '/docs',
        domain: 'https://simonmcmanus.com',
        build: {
            css: 'scss-global'
        },

        files: [
            'user.svg',
            'cv.html',
            'client/global-styles-compiled.css',
            'client/index-compiled.js',
            'client/freesketch/freesketch_gothic_light_demo-webfont.eot',
            'client/freesketch/freesketch_gothic_light_demo-webfont.woff',
            'client/freesketch/freesketch_gothic_light_demo-webfont.ttf',
        ]
    }
}
