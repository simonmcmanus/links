
const links = require('./links');
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
                limit: 5,
                data: links.reverse()
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
            'cv.html',
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