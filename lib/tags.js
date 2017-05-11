
var _ = require('lodash')

module.exports = function(links) {
    var tags = _.flatten(links.map(function(link) {
        return link['.tag']
    }))
    return _.uniqBy(tags, 'href')
};

