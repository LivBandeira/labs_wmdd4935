const Fs = require('fs')
const Hapi = require('hapi')
const Rot13 = require('rot13-transform')
const Path = require('path')

const server = new Hapi.Server()

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
})

server.route({
    method: 'GET',
    path: '/',
    config: {
        handler: function (request, reply) {
            let myFile = Fs.createReadStream(Path.join(__dirname, 'input.txt'))
            reply(myFile.pipe(Rot13()))
        }
    }
})

server.start((err) => {
    if (err) { 
        throw err
    }
    console.log('Server running at:', server.info.uri)
})
