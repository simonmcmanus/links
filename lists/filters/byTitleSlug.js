module.exports = function (item) {    
    if (!this.params || !this.params.titleSlug) {
        return false
    }
    return (item.titleSlug === this.params.titleSlug)
}