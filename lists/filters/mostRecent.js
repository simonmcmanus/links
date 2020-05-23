module.exports = function (item, index, list) {
    var numberToShow = 30 // one off atm
    var itemCount = list.length
    var firstPos = itemCount - numberToShow
    return index > firstPos
}