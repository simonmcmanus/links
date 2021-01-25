module.exports = {
    '/': {
        page: 'home',
        spec: {
            title: 'Simon McManus',
            '.links_holder': {
                component: 'item',
                lists: ['links'],
                mapper: 'links',
                filters: ['lastFive']
            },
        }
    },
    '/talks.html': {
        page: 'talks',
        spec: {
            title: 'Talks from Simon McManus'
        }
    },
    '/about.html': {
        page: 'about',
        spec: {
            title: 'About Simon McManus'
        }
    },
    '/hire.html': {
        page: 'hire',
        spec: {
            title: 'Hire Simon McManus'
        }
    },
    '/links.html': {
        page: 'links',
        spec: {
            title: 'Simons recent links',
            '.links-title': 'Recent links from Simon',
            '.links_holder': {


                component: 'item',
                lists: ['links'],
                mapper: 'links',
                filters: ['mostRecent']
            },
            'meta[name=description]': {
                content: 'Links from Simon McManus'
            },
            'meta[name=keywords]': {
                content: 'links'
            }
        }
    },
    '/posts.html': {
        page: 'posts',
        spec: {
            title: 'Recent posts from Simon McManus',
            '.page-title': 'Recent Posts from Simon',
            '.holder': {
                component: 'item',
                lists: ['posts'],
                mapper: 'posts',
                filters: ['mostRecent']
            },
            'meta[name=description]': {
                content: 'Links from Simon McManus'
            },
            'meta[name=keywords]': {
                content: 'links'
            }
        }
    },

    // '/:date/index.html': {
    //     page: 'links',
    //     lists: ['links'],
    //     spec: {
    //       title: 'Links for :date',
    //       '.links-title': 'Links for :date',
    //       'meta[name=description]': {
    //         content: 'Links for :date'
    //       },
    //       'meta[name=keywords]': {
    //         content: ':date'
    //       },
    //       '.links_holder': {
    //         component: 'link',
    //         lists: [    'links'],
    //         filters: ['byDate'],
    //         mapper: 'links'
    //       }
    //     }
    //   },
    '/tags/index.html': {
        page: 'links',
        spec: {
            title: 'Tags from Simon McManus',
            '.links-title': 'Tags from Simon McManus',
            '.links_holder': {

                lists: ["categories"],
                component: 'tag',
                filters: [],
                mapper: "category"
            },
            'meta[name=description]': {
                content: 'Tags from Simon McManus'
            },
            'meta[name=keywords]': {
                content: 'tags,links'
            }
        }
    },

    '/posts/:titleSlug/index.html': {
        lists: ['posts'],
        filters: ['byTitleSlug'],
        mapper: 'post',
        page: 'posts',
        spec: {
            title: ':titleSlug',
            '.holder': {
                component: 'post',
                lists: ['posts'],
                mapper: 'post',
                filters: ['byTitleSlug'],
            },
        }
    },

    "/tags/:tags/index.html": {
        page: "tag",
        lists: ["links", "posts", "categories"],
        filters: ["byTags"],
        spec: {
            title: ":tags | Simon McManus",
            '.tag': ":tags",
            'link[rel=canonical]': {
                href: 'https://simonmcmanus.com/tags/:tags'
            },
            'a.contact': {
                href: 'mailto:mcmanus.simon@gmail.com?subject=Contact: :tags'
            },
            "meta[name=description]": {
                content: "Links tagged :tags"
            },
            "meta[name=keywords]": {
                content: ":tags"
            },
            ".category": {
                lists: ["categories"],
                component: 'category',
                filters: ["byTags"],
                mapper: "category",
                states: {
                    empty: {
                        component: 'category-empty',
                        mapper: 'category'
                    }
                }
            },
            ".links_holder": {
                component: "item",
                lists: ["links"],
                filters: ["byTags"],
                mapper: "links"
            },
            ".posts_holder": {
                component: "item",
                lists: ["posts"],
                filters: ["byTags"],
                mapper: "posts",
                states: {
                    empty: {
                        component: 'no-posts'
                    }
                }
            }
        }
    },
    options: {
        outputDir: "/docs",
        domain: "https://simonmcmanus.com",
        build: {
            css: "scss-global"
        },

        files: [
            "cv.html",
            "favicon.ico",
            "client/icons/play.svg",
            "client/icons/monitor.svg",
            "client/global-styles-compiled.css",
            "client/assets/categories/js.png"

        ]
    }
};