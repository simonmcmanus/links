
const links = require('./links').reverse();
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
            title: 'Links from Simon McManus',
            ".links_holder": {
                component: 'link',
                data: links
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
            ".links_holder": {
                component: 'link'
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
            title: 'Links tagged :group',
            ".links-title": 'Links tagged:  :group',
            ".links_holder": {
                component: 'link'
            }
        }

    },

    defaultSpec: {
    },
    options: {
        outputDir: '/docs',
        build: {
            css: 'scss-global'
        },
        validate: {
            w3c: 'error'
        },
        files: [
            'favicon.ico',
            'cv.html',
            'google221a99ae521d425f.html',
            'client/global-styles-compiled.css',
            'client/index-compiled.js',
            'client/freesketch/freesketch_gothic_light_demo-webfont.eot',
            'client/freesketch/freesketch_gothic_light_demo-webfont.woff',
            'client/freesketch/freesketch_gothic_light_demo-webfont.ttf',
            'client/icons/stamp/digg.png',
            'client/icons/stamp/vimeo.png',
            'client/icons/stamp/youtube.png',
            'client/icons/stamp/flickr.png',
            'client/icons/stamp/wordpress.png',
            'client/icons/stamp/github.png',
            'client/icons/stamp/twitter.png',
            'client/icons/stamp/facebook.png',
            'client/icons/stamp/mail.png',
            'client/icons/stamp/delicious.png',
            'client/loading.svg'
        ]
    }
}