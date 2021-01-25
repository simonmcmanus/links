module.exports = function(item) {
    const validTags = item.tags.filter(item => item); // strips out ''


    return validTags.includes(this.params.tags)
}