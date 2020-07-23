const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({
    extended : false
}))
app.use(cors())
app.use(bodyParser.json())

const Users = require('./routes/user')
const Reservations = require('./routes/reservation')
const Billets = require('./routes/billet')
app.use('/users', Users)
app.use('/reservations', Reservations)
app.use('/billets', Billets)

app.listen(3001, console.log('Server running'))
