
const links = require('./links');
module.exports = {
    "/": {
        page: 'home'
    },
    "/hire.html": {
        page: 'hire',
    },
    "/links.html": {
        page: 'links',
        spec: {
            ".links_holder": {
                component: 'link',
                limit: 5,
                data: links.reverse()
            }
        }
    },
    options: {
        outputDir: '/docs',
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