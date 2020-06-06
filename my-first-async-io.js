//Create a file named my-first-async-io.js.  
/*Write a program that uses a single asynchronous filesystem operation to  
read a file and print the number of newlines it contains to the console  
(stdout), similar to running cat file | wc -l.  
The full path to the file to read will be provided as the first  
command-line argument.*/
var fs = require('fs')
var fileName = process.argv[2]
var file = fs.readFile(fileName, function(err, data) {
		if (err === null) {
			var lines = data.toString().split("\n")
			console.log(lines.length - 1)
		}

	}
)

