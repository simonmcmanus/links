var slugify = require('slugify')

var out = slugify('include-file-from.json')

out = out.replace(/\./g, '-')

console.log('->', out)
