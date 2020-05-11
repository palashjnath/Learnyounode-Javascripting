var fs = require('fs')
var file = process.argv[2]
var content = fs.readFileSync(file)
var str = content.toString()
var allLines = str.split('\n')
console.log(allLines.length -1)
