const { request } = require('express')

const routes = require('express').Router()
const food = require('./food')

routes.use('/', food)

module.exports = routes