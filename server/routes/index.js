const router = require('express').Router()
const food = require('./food')
const user = require('./user')

router.use('/foods', food)
router.use('/users', user)

module.exports = router