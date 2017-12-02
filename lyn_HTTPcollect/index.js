const http = require('http')
const bl = require('bl')  
let url = process.argv[2]

http.get(url, function (res) {
  res.pipe(bl(function (err, data) {
  	if (err) {
  		console.log(err)
  	}
  	data = data.toString()
  	console.log(data.length)
    console.log(data)
  }))
})
