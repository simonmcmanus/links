const _ = require('lodash');
const extractUniqueTags = (links) => {

    const tags = links.map(link => link.tags)

    tags.reduce(accumulator, (linksTags) => {
        var prepped = linksTags.split(',')
        accumulator.contat(prepped);
        return accumulator
    }, [])


    return uniqueTags
}



const searchTags = (tags, search) => {

    const matches = _.filter(tags, (tag) => {
        return tag && tag.indexOf(search) > -1
    })
    return _.uniq(matches)

}
module.exports = { extractUniqueTags, searchTags }