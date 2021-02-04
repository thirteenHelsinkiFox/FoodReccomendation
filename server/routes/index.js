const routes = require('express').Router()
const router = require('express').Router()
const food = require('./food')
const user = require('./user')
const authenticate = require('../middlewares/authenticate')

router.use('/users', user)

router.use(authenticate)
router.use('/', food)

module.exports = router