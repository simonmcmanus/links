module.exports = function(category) {
    if (!category) {
        return {
            ".title": this.params.tags
        }
    }
    console.log(category.image)

    return {
        ".title": category.title || '',
        ".summary": category.summary,
        "header": {

            style: "background-image: radial-gradient(circle, rgba(.6,.6,.6,.4) 0%, rgba(1, 1, 1,.9) 100%), url(" + category.image + ");"
        }
    }

}