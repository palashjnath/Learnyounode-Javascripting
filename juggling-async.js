const http = require('http')
const bl = require('bl')
const asyncc = require ('async')
const urls = process.argv.slice(2)
asyncc.eachSeries(urls, function (url, next) {
	http.get(url, function (response){
			response.pipe(bl(function (err, data) {
				if (err) return next(err)
				let dataString =''
				dataString += data
				console.log(dataString)
				next()
			}))
	})
	
})
	
			

		//	http.get(urls[1], function (response){
		//	response.setEncoding('utf8')
		//	response.pipe(bl(function (err, data) {
		///		if (err) return console.error(err)
		//		let dataString =''
		//		dataString += data
		//		console.log(dataString)
			

	
		//	http.get(urls[2], function (response){
			//response.setEncoding('utf8')
		//	response.pipe(bl(function (err, data) {
		//		if (err) return console.error(err)
		//		let dataString =''
		//		dataString += data
		//		console.log(dataString)
		//		}))
//
//				})
//			}))
//		})
//	}))
//})

