printFullName = function(firstName, callback) {
	console.log(firstName + " Nath")

	callback(firstName)
}


printFullName("Anjan", (firstName) => {
	console.log("\n")
	console.log(firstName + "is rocking")
})
