// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });

// Require external modules
const mongoose = require('mongoose');

// Import Swagger Options
const swagger = require('./config/swagger');

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// import Routes
const routes = require('./routes/Car');

// Connect to DB
mongoose.connect('mongodb://iykeevans:rosewell238@ds139934.mlab.com:39934/mycargarage')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
});

// initialize routes
routes.forEach(route => fastify.route(route));

// Run the server
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();