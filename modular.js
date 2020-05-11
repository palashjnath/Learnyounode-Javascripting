const fs = require('fs')
const path = require('path')
module.exports = function(folder, ext, callback) {
	fs.readdir(folder, function(err, files){
		ext = '.' + ext
		if (err) return callback(err)
		const filtered = files.filter(file => {
			return path.extname(file) === ext 
		})
		return callback(null, filtered)
	})
}
		
