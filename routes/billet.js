const express = require('express')
const Billets = express.Router()
const cors = require('cors')

const Billet = require('../models/Billet')
Billets.use(cors())


    Billets.get('/', (req,res) =>{
        Billet.findAll()
        .then(documents => res.json(documents))
    })

    Billets.get('/Billets/:id', (req,res) =>{
       Billet.findAll({where: {demandId : req.params.id}})
        .then(documents => res.json(documents))
    })

    Billets.post('/', (req, res) =>{
        Billet.create(req.body)
        .then(billets => res.json(billets))
    })

    Billets.put('/Billets/:id', (req, res) =>
        models
            .Document
            .update(req.body, {
            where: {id: req.params.id}
        })
        .then(() => res.end("Done"))
    )

    Billets.delete('/Billets/:id', (req, res) =>
        Billet.destroy({
            where: {id: req.params.id}
        })
        .then(() => res.end("Done"))
    )

    Billets.get('/myaccount', (req,res) =>{
        Billet.findAll({include:User})
        .then(Billets => res.json(Billets))
    })

module.exports = Billets