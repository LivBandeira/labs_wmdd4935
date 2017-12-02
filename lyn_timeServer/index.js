const net = require('net')

function date(i) { return i < 10 ? '0' + i : i }

let server = net.createServer(function(socket) {
  d = new Date()
  s = d.getFullYear() + "-" +
    date(d.getMonth() + 1) + "-" +
    date(d.getDate()) + " " + 
    date(d.getHours()) + ":" +
    date(d.getMinutes()) + "\n"; +
  socket.end(s);
})
server.listen(process.argv[2])
