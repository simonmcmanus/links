module.exports = function (item) {
    console.log('=', item.date, this.params.date)
    return item.date === this.params.date
}