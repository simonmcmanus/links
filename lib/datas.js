module.exports = function (datas, options)  {
    this.sources = datas
    this.combined = [].concat.apply(true, datas).slice(1)
    this.options = options || {};
    this.filters = this.options.filters || []
    this.maps =  []


    this.get = (getOptions) => {


        getOptions = getOptions || {};

        if (getOptions.sort && typeof getOptions.sort === 'function') {
            this.combined = this.combined.sort(getOptions.sort)
        }

        var out = [].concat(this.combined)

        var filters = this.filters.concat(getOptions.filters || []);

        filters.forEach((filter) => {
            out = out.filter(filter)
        })

        var maps = this.maps.concat(getOptions.maps || []);

        console.log('->', maps)
        maps.forEach((map) => {
            out = out.map(map)
        })


        return out
    }
    return this
}
