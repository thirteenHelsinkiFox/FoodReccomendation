require('dotenv').config({path: __dirname + '/.env'})

const express = require('express')
const cors = require('cors')
const routes = require('./routes/index.js')
const app = express()
const PORT = 3000
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', routes)
app.use(errorHandler)
app.listen(PORT, () => console.log(`server running on port : ${PORT}`))