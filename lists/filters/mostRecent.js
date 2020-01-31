module.exports = function (item, index, list) {
    var numberToShow = 11 // one off atm
    var itemCount = list.length
    var firstPos = itemCount - numberToShow
    return index > firstPos
}