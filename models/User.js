const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
    'users',
    {
        firstname : {
            type : Sequelize.STRING
        },
        lastname : {
            type : Sequelize.STRING
        },
        email : {
            type : Sequelize.STRING
        },
        password: {
            type : Sequelize.STRING
        },
        reservation_id: {
            type : Sequelize.INTEGER
        },
    }, 
    {
        timestamps : false,
    }
)

