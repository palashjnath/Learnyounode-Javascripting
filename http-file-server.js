const http = require('http')
const fs = require('fs')
const port = process.argv[2]
const path = process.argv[3]
const server = http.createServer(function callback (request, response) {
	const stream = fs.createReadStream(path)
	stream.pipe(response)
})
server.listen(port)

	  
