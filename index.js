require('dotenv').config()
const express = require("express")
const routes = require('./route')
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())

routes(app)

//app.listen(process.env.PORT)
app.listen(process.env.PORT, function () {
    console.log('servidor ativo ' + process.env.PORT)
})