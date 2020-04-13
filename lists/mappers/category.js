module.exports = function (category) {
    if(!category) {
        return {
            ".title": this.params.tags
        }
    }

    return {
        ".title": category.title || '',
        ".summary": category.summary,
        "img": {
            src: category.image
        }
    }

}