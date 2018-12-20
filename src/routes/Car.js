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
  }
];

module.exports = routes;