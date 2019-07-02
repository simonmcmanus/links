var slugify = require('slugify')

module.exports = (string) => {
  const lowerCaseString = string.toLowerCase()
  return slugify(lowerCaseString)
}
