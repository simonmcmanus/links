module.exports = function (item) {

    //console.log('params', item, this.params.tags)
    return item.tags.includes(this.params.tags)
}