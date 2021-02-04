const express = require('express')
const app = express()
const PORT = 3000
const routes = require('./routes/index')

app.use(routes)


app.listen(PORT, () => console.log(`server running on port : ${PORT}`))