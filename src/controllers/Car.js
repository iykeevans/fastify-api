// external dependencies
const boom = require('boom');

// import Models
const Car = require('../models/Car');

// Get all cars
exports.getCars = async (request, reply) => {
  try {
    const cars = await Car.find();
    if (cars.length === 0) {
      return { status: 404, message: 'Database Empty' };
    }
    return cars;
  } catch (err) {
    throw boom.boomify(err);
  }
}