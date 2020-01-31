const links = require("./links");
const getPosts = require("./lib/get-posts");

const posts = getPosts()
  .sort((a, b) => {
    var dateA = a[".dateUrl"].split("-").join("");
    var dateB = b[".dateUrl"].split("-").join("");
    if (dateA <= dateB) return -1;
    if (dateA => dateB) return 1;
    return 0;
  })
  .reverse();
// var tags = require('./lib/tags')(links.concat(postsSummary));
var tags = require("./lib/tags")(links);
const urlSafe = require("./lib/url-safe");
const allLinks = links.slice(0);
links.reverse();
module.exports = {
  //   '/': {
  //     page: 'home',
  //     spec: {
  //       title: 'Simon McManus'
  //     }
  //   },
  //   '/talks.html': {
  //     page: 'talks',
  //     spec: {
  //       title: 'Talks from Simon McManus'
  //     }
  //   },
  //   '/hire.html': {
  //     page: 'hire',
  //     spec: {
  //       title: 'Hire Simon McManus'
  //     }
  //   },
  //   '/links.html': {
  //     page: 'links',
  //     spec: {
  //       title: 'Recent links from Simon McManus',
  //       '.links-title': '10 most recent links',
  //       '.links_holder': {
  //         component: 'link',
  //         lists: ['links'],
  //         mapper: 'links',
  //         filters: ['mostRecent']
  //       },
  //       'meta[name=description]': {
  //         content: 'Links from Simon McManus'
  //       },
  //       'meta[name=keywords]': {
  //         content: 'links'
  //       }
  //     }
  //   },
  //   '/posts.html': {
  //     page: 'posts',
  //     spec: {
  //       title: 'Recent posts from Simon McManus',
  //       '.page-title': 'Blog posts',
  //       '.holder': {
  //         component: 'posts',
  //         lists: ['posts'],
  //         mapper: 'posts',
  //         filters: ['mostRecent']
  //       },
  //       'meta[name=description]': {
  //         content: 'Links from Simon McManus'
  //       },
  //       'meta[name=keywords]': {
  //         content: 'links'
  //       }
  //     }
  //   },

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
  //         lists: ['posts', 'links'],
  //         filters: ['byDate'],
  //         mapper: 'links'
  //       }
  //     }
  //   },
  //   '/tags/index.html': {
  //     page: 'links',
  //     spec: {
  //       title: 'Tags from Simon McManus',
  //       '.links-title': 'Tags from Simon McManus',
  //       '.links_holder': {
  //         component: 'tag',
  //         data: {
  //           '.tag': tags
  //         }
  //       },
  //       'meta[name=description]': {
  //         content: 'Tags from Simon McManus'
  //       },
  //       'meta[name=keywords]': {
  //         content: 'tags,links'
  //       }
  //     }
  //   },

  //   '/posts/:titleSlug/index.html': {
  //     page: 'post',
  //     lists: ['posts'],
  //     filters: ['byTitleSlug'],
  //     mapper: 'post',
  //     spec: {
  //     }
  //   },

  "/tags/:tags/index.html": {
    page: "links",
    lists: ["links"],
    filters: ["byTags"],
    rssMapper: "rssMapper",
    spec: {
      title: ":tags | Simon McManus",
      ".links-title": "Links tagged:  :tags",
      "meta[name=description]": {
        content: "Links tagged :tags"
      },
      "meta[name=keywords]": {
        content: ":tags"
      },
      ".links_holder": {
        component: "link",
        lists: ["links"],
        mapper: "links"
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
      "client/icons/play.svg",
      "client/icons/monitor.svg",
      "client/global-styles-compiled.css",
      "client/index-compiled.js"
    ]
  }
};
