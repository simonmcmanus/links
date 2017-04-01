
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
            'client/icons/stamp/vimeo.png',
            'client/icons/stamp/youtube.png',
            'client/icons/stamp/wordpress.png',
            'client/icons/stamp/github.png',
            'client/icons/stamp/twitter.png',
            'client/icons/stamp/facebook.png',
            'client/icons/stamp/mail.png',
            'client/icons/stamp/delicious.png'
        ]
    }
}