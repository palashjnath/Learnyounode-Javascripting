const http = require('http')
const site = process.argv[2]
http.get(site, function callback (response){
	response.on('error', (out) => console.error(err))
				response.setEncoding('utf8')

				response.on('data', function (data){
				console.log(data)
				})
}).on('end', (err)=> console.log(end))

