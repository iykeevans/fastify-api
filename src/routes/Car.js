// import Controller
const Car = require('../controllers/Car');

const routes = [
  {
    method: 'GET',
    url: '/api/cars',
    handler: Car.getCars
  },
  {
    method: 'GET',
    url: '/api/cars/:id',
    handler: Car.getSingleCar
  },
  {
    method: 'POST',
    url: '/api/cars',
    handler: Car.addCar,
    // schema: documentation.addCarSchema
  },
  {
    method: 'PUT',
    url: '/api/cars/:id',
    handler: Car.updateCar,
  },
  {
    method: 'DELETE',
    url: '/api/cars/:id',
    handler: Car.deleteCar,
  }
];

module.exports = routes;