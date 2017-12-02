const Hapi = require('hapi')
const Joi = require('joi')

const server = new Hapi.Server()

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
})

server.route({
    path: '/chickens/{breed}',
    method: 'GET',
    config: {
        handler: (request, reply) => {
                reply('You asked for the chicken ' + request.params.breed);
            },
            validate: {
                params: {
                    breed: Joi.string().required()
                }
        }
    }
})

server.start((err) => {
    if (err) {
        throw err
    }
    console.log('Server running at:', server.info.uri)
})
