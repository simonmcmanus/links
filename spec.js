
const links = require('./links');
module.exports = {
    "/": {
        page: 'home',
        spec: {
            title: 'simonmcmanus.com'
        }
    },
    "/hire.html": {
        page: 'hire',
        spec: {
            title: 'hire simonmcmanus.com'
        }
    },
    "/links.html": {
        page: 'links',
        spec: {
            title: 'Links from Simon McManus',
            ".links_holder": {
                component: 'link',
                limit: 5,
                data: links.reverse()
            }
        }
    },
    options: {
        outputDir: '/docs',
        validate: {
            w3c: 'error'
        },
        files: [
            'client/style.css',
            'client/index-compiled.js',
            'client/freesketch/freesketch_gothic_light_demo-webfont.eot',
            'client/freesketch/freesketch_gothic_light_demo-webfont.woff',
            'client/freesketch/freesketch_gothic_light_demo-webfont.ttf',
            'client/icons/vimeo.png',
            'client/icons/youtube.png',
            'client/icons/wordpress.png',
            'client/icons/github.png',
            'client/icons/twitter.png',
            'client/icons/facebook.png'
        ]
    }
}