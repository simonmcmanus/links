module.exports = (datas, options) => {
    this.sources = datas
    this.combined = [].concat.apply(true, datas).slice(1)
    this.options = options

    if (typeof this.options.sort === 'function') {
        this.combined = this.options.sort(this.options)
    }

    this.get = () => {
        var out = this.combined

        options.filters.forEach((filter) => {
            out = out.filter(filter)
        })
        options.maps.forEach((map) => {
            out = out.map(map)
        })
        return out
    }
    return this
}
