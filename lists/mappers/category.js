module.exports = function (category) {
    return {
        ".title": category.title,
        ".summary": category.summary,
        "img": {
            src: category.image
        }
    }

}
