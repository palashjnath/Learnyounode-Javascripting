/*Create a file named http-uppercaserer.js.  
   
  Write an HTTP server that receives only POST requests and converts  
  incoming POST body characters to upper-case and returns it to the client.  
   
  Your server should listen on the port provided by the first argument to  
  your program. */

const http = require('http')
const map = require('through2-map')
const fs = require('fs')
const path = process.argv[2]
const port = process.argv[3]
const server = http.createServer(function (req, res) {
	const stream = fs.createReadStream(path)
	stream.pipe(map(functon (res) {
		return res.toString().split('').reserve().join('')
	})).pipe(outStream)
})
server.listen(port)
