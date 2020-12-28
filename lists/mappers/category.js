module.exports = function(category) {
    if (!category) {
        return {
            ".title": this.params.tags
        }
    }
    let headerStyle = 'min-height:9em;';
    if (category.image) {
        headerStyle = headerStyle + "background-image: radial-gradient(circle, rgba(.6,.6,.6,.4) 0%, rgba(1, 1, 1,.9) 100%), url(" + category.image + ");"
    }

    return {
        ".title": category.title || '',
        ".summary": category.summary || false,
        "header": {
            style: headerStyle
        }
    }

}