/*Create a file named juggling-async.js.  
   
  This problem is the same as the previous problem (HTTP COLLECT) in that  
  you need to use http.get(). However, this time you will be provided with  
  three URLs as the first three command-line arguments.  
   
  You must collect the complete content provided to you by each of the URLs  
  and print it to the console (stdout). You don't need to print out the  
  length, just the data as a String; one line per URL. The catch is that you  
  must print them out in the same order as the URLs are provided to you as  
  command-line arguments.*/ 
   

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

