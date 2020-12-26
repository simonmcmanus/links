const _ = require('lodash');
const extractUniqueTags = (links) => {

        const tags = links.map(link => link.tags)

        const uniqueTags = tags.reduce((accumulator, linksTags) => {
            var prepped = linksTags.split(',')
            return accumulator.concat(prepped);

        }, [])
        return uniqueTags.filter((tag) => tag !== '')
    }
    //extractUniqueTags([{ tags: 'a,b,c' }])

const searchTags = (tags, search) => {

    const matches = _.filter(tags, (tag) => {
        return tag && tag.indexOf(search) > -1
    })
    matches.unshift(search)
    return _.uniq(matches)

}

module.exports = { extractUniqueTags, searchTags }