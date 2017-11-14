let http = require('http')
let url = require('url')
 
function parsetime (date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}
 
function unixtime (date) {
  return { unixtime : date.getTime() }
}
 
let server = http.createServer(function (req, res) {
  let parseUrl = url.parse(req.url, true)
  let date = new Date(parseUrl.query.iso)
  let result
 
  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(date)
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(date)
 
  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
