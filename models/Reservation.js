const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
    'reservations', 
    {
        reservationDate: {
            type: Sequelize.DATE
        },
        sessionStart: {
            type: Sequelize.DATE
        },
        sessionEnd: {
            type: Sequelize.DATE
        },
        price: {
            type: Sequelize.INTEGER
        },
        adults: {
            type: Sequelize.INTEGER
        },
        children: {
            type: Sequelize.INTEGER
        },
        reduit: {
            type: Sequelize.INTEGER
        },
        category: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps : false,
    }
);
