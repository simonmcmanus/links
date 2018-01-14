module.exports = function (datas, options)  {
    this.sources = datas
    this.combined = [].concat.apply(true, datas).slice(1)
    this.options = options || {};
    this.filters = this.options.filters || []
    this.maps =  []


  //  console.log(this.combined);
    if (this.options.group) {
        var groupedLists = this.combined.reduce(this.options.group, {});

        //console.log('groups', Object.keys(groupedLists));


        var groups = [];
        Object.keys(groupedLists).forEach((group) => {
            groupedLists[group].group = group;
            groups.push(groupedLists[group])
        })
        console.log('g', groups)
    }



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

        // sort by url

        var urls = {};



        var maps = this.maps.concat(getOptions.maps || []);

        maps.forEach((map) => {
            out = out.map(map)
        })

        if (getOptions.limit) {
            return out.slice(0, getOptions.limit)
        }

        return out
    }
    return this
}
