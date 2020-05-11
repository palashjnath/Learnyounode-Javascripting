const fs = require('fs')
const path = require('path')
const module = require('./modular.js')
const directory = process.argv[2]
const extention = '.' + process.argv[3]
fs.readdir(directory, function (err, files){
	if (err) return console.error(err) 
	else files.forEach(function (file){
		if (path.extname(file) === extention){
		console.log(file)
		}
	})
	})
