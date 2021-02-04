const routes = require('express').Router()
const router = require('express').Router()
const food = require('./food')
const user = require('./user')

router.use('/', food)
router.use('/users', user)

module.exports = router