var fs = require('fs')
var fileName = process.argv[2]
var file = fs.readFile(fileName, function(err, data) {
		if (err === null) {
			var lines = data.toString().split("\n")
			console.log(lines.length - 1)
		}

	}
)

