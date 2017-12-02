const http = require('http')
const map = require('through2-map')

let upC = map(function(chunk) {
  return chunk.toString().toUpperCase();
})

let server = http.createServer(function(req, res) {
  if (req.method == 'POST') {
    req.pipe(upC).pipe(res)
  }
})
server.listen(process.argv[2])
