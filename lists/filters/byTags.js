module.exports = function (item) {
    return item.tags.includes(this.params.tags)
}