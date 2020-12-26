const extractUniqueTags = (links, searchTerm) => {
    let allTags = []
    links.forEach(function(link) {
        var prepped = link.tags.split(',')
        allTags = allTags.concat(prepped)

    })
    var keyed = {};
    allTags.forEach(function(tag) {

        if (!searchTerm || searchTerm && tag.indexOf(searchTerm) > -1) {
            keyed[tag] = true;

        }
    })

    var uniqueTags = Object.keys(keyed).map((tag) => tag)

    uniqueTags.unshift(searchTerm)
}
module.exports = { extractUniqueTags }