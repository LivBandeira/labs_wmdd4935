const fs = require('fs')
const http = require('http')
let file = process.argv[3]

server = http.createServer(function(req, res) {
  fs.createReadStream(file).pipe(res)
})
server.listen(process.argv[2]);
