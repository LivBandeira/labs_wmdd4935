const Hapi = require('hapi')
const Inert = require('inert')
const Path = require('path')

const server = new Hapi.Server()

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
})

server.register(Inert, (err) => {
    if (err) {
        throw err
    }
})

server.route({
    method: 'GET',
    path: '/foo/bar/baz/{filename}',
    handler: {
        directory: {
            path: Path.join(__dirname, 'public'),
        }
    }
})

server.start((err) => {
    if (err) throw err
})
