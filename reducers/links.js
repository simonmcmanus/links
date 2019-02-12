
const links = require('../links')

const SpeclateReducer = require('../node_modules/speclate/lib/Reducer')


const linksReducer = SpeclateReducer([links.reverse()], {
    maps: [
        function(item) {
            return {
                '.title': item.title,
                '.dateUrl':  item.dateUrl,
                '.summary': item.summary,
                '.tag': item.tags,
                'a.created': {
                    href: item.createdUrl,
                    innerHTML: item.createdDate
                },
                'img': {
                    src: item.favIcon
                },
                'a.link': {
                    href: item.url
                }
            }
        }
    ]
    //  groupBy:(item) => {
    //     console.log(item)
    //     return item && item.created
    //  }
});



module.exports = linksReducer