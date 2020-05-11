const mymodule = require('./modular.js')
const directory = process.argv[2]
const extention = process.argv[3]
mymodule(directory, extention, function(err, filteredList){
	if (err) throw (err)
	filteredList.forEach(file => {
		console.log(file)
	})
})

