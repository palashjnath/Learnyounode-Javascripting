/*Create a file named http-collect.js.  
   
  Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Collect all data from the server (not  
  just the first "data" event) and then write two lines to the console  
  (stdout).  
   
  The first line you write should just be an integer representing the number  
  of characters received from the server. The second line should contain the  
  complete String of characters sent by the server.*/

const http = require('http')

http.get(process.argv[2], (response) => {
		let result = ''
		response.setEncoding('utf8')
		response.on('err', (err) =>
			{ console.error(err) 
			})
		response.on('data', (data) => {
			result += data
		})
		
		response.on('end', (end) => {
			console.log(result.length)
			console.log(result)
		})
})
		
		
			

