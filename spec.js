
const links = require('./links')
const getPosts = require('./lib/get-posts')

const posts = getPosts()

// var tags = require('./lib/tags')(links.concat(postsSummary));
var tags = require('./lib/tags')(links)
const urlSafe = require('./lib/url-safe')
const allLinks = links.slice(0)
links.reverse()
module.exports = {
  '/': {
    page: 'home',
    spec: {
      title: 'Simon McManus'
    }
  },
  '/talks.html': {
    page: 'talks',
    spec: {
      title: 'Talks from Simon McManus'
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
      title: 'Recent links from Simon McManus',
      '.links-title': '10 most recent links',
      '.links_holder': {
        component: 'link',
        lists: ['links'],
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
      '.page-title': 'Blog posts',
      '.holder': {
        component: 'posts',
        lists: ['posts'],
        filters: ['recent']
      },
      'meta[name=description]': {
        content: 'Links from Simon McManus'
      },
      'meta[name=keywords]': {
        content: 'links'
      }
    }
  },

  '/posts/:title/index.html': {
    page: 'post',
    lists: ['posts']
  },

  '/links/:date/index.html': {
    page: 'links',
    lists: ['posts', 'links'],
    filter: ['byDate'],
    spec: {
      title: 'Links for :date',
      '.links-title': 'Links for :date',
      'meta[name=description]': {
        content: 'Links for :date'
      },
      'meta[name=keywords]': {
        content: ':date'
      },
      '.links_holder': {
        component: 'link'
      }
    }
  },
  '/tags/index.html': {
    page: 'links',
    spec: {
      title: 'Tags from Simon McManus',
      '.links-title': 'Tags from Simon McManus',
      '.links_holder': {
        component: 'tag',
        data: {
          '.tag': tags
        }
      },
      'meta[name=description]': {
        content: 'Tags from Simon McManus'
      },
      'meta[name=keywords]': {
        content: 'tags,links'
      }

    }

  },
  '/tags/:tag/index.html': {
    page: 'links',
    lists: ['posts', 'links'],

    url: function (group) {
      return '/tags/' + urlSafe(group) + '/index.html'
    },
    group: (pages, item) => {
      if (!item['.tag']) {
        return pages
      }

      const tags = item['.tag']
      tags.forEach(function (tag) {
        var tagName = tag.innerHTML // hacky
        if (!pages[tagName]) {
          pages[tagName] = []
        }
        pages[tagName].push(item)
      })
      return pages
    },
    spec: {
      title: ':group | Simon McManus',
      '.links-title': 'Links tagged:  :group',
      'meta[name=description]': {
        content: 'Links tagged :group'
      },
      'meta[name=keywords]': {
        content: ':group'
      },
      '.links_holder': {
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
      'cv.html',
      'client/icons/play.svg',
      'client/icons/monitor.svg',
      'client/global-styles-compiled.css',
      'client/index-compiled.js',
      'client/freesketch/freesketch_gothic_light_demo-webfont.eot',
      'client/freesketch/freesketch_gothic_light_demo-webfont.woff',
      'client/freesketch/freesketch_gothic_light_demo-webfont.ttf'
    ]
  }
}
