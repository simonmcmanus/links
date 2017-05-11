
var _ = require('lodash')

module.exports = function(links) {
    var tags = _.flatten(links.map(function(link) {
        return link['.tag']
    }))
    tags = _.compact(tags)
    return _.uniqBy(tags, 'href')
};

