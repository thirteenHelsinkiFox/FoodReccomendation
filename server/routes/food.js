const routes = require('express').Router()
const foodController = require('../controllers/foodController')

routes.get('/', foodController.getFood)
routes.get('/:id', foodController.getFoodId)


module.exports = routes