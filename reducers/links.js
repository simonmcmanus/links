
const links = require('../links')

const SpeclateReducer = require('../node_modules/speclate/lib/Reducer')



const linksReducer = SpeclateReducer([links.reverse()], {
    //  groupBy:(item) => {
    //     console.log(item)
    //     return item && item.created
    //  }
});



module.exports = linksReducer