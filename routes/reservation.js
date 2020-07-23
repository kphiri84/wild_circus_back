const express = require('express')
const Reservations = express.Router()
const cors = require('cors')

const Reservation = require('../models/Reservation')
const User = require('../models/User')
Reservations.use(cors())


    Reservations.get('/', (req,res) =>{
        Reservation.findAll()
        .then(reservations => res.json(reservations))
    })

    Reservations.get('/reservations/:id', (req,res) =>{
       Reservation.findAll({where: {demandId : req.params.id}})
        .then(reservations => res.json(reservations))
    })

    Reservations.post('/', (req, res) =>{
        Reservation.create(req.body)
        .then(reservations => res.json(reservations))
    })

    Reservations.put('/reservations/:id', (req, res) =>
        Reservation.update(req.body, {
            where: {id: req.params.id}
        })
        .then(() => res.end("Done"))
    )

    Reservations.delete('/reservations/:id', (req, res) =>
        Reservation.destroy({
            where: {id: req.params.id}
        })
        .then(() => res.end("Done"))
    )

    Reservations.get('/myaccount', (req,res) =>{
        Reservation.findAll({include:User})
        .then(reservations => res.json(reservations))
    })

module.exports = Reservations