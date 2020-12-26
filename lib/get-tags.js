const _ = require('lodash');
const extractUniqueTags = (links) => {

    const tags = links.map(link => link.tags)

    const uniqueTags = tags.reduce((accumulator, linksTags) => {
        console.log('acc', accumulator)
        var prepped = linksTags.split(',')
        accumulator.concat(prepped);
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