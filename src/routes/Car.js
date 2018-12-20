// import Controller
const Car = require('../controllers/Car');

const routes = [{
  method: 'GET',
  url: '/api/cars',
  handler: Car.getCars
}];

module.exports = routes;