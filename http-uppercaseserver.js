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
