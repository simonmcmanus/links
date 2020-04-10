module.exports = function (category) {

    return {
        ".title": category.title || this.params.tags || '',
        ".summary": category.summary,
        "img": {
            src: category.image
        }
    }

}