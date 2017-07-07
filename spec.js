
const links = require('./links')

var tags = require('./lib/tags')(links);

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
            // "meta[name=description]": {
            //     content: 'Links for '
            // },
            // "meta[name=keywords]": {
            //     content: 'Links for '
            // },
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
            }

        }

    },
    "/tags/:tag/index.html": {
        page: 'links',
        data: links,
        url: function(group) {
            return '/tags/' + group.replace(/ /g, '-') + '/index.html'
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
            title: ':group links from Simon McManus',
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
        validate: {
            w3c: 'ignore'
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