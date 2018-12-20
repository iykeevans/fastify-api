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

// Get single car by id
exports.getSingleCar = async (request, reply) => {
  try {
    const car = await Car.findById(request.params.id);
    return car;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Add a new car
exports.addCar = async (request, reply) => {
  try {
    const car = new Car(request.body)
    return car.save()
  } catch (err) {
    throw boom.boomify(err);
  }
}