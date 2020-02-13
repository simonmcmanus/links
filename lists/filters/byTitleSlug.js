module.exports = function (item) {    
    return (item.titleSlug === this.params && this.params.titleSlug)
}