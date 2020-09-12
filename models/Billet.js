const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
    'billets', 
    {
        category: {
            type: Sequelize.STRING
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
        nombrePlace: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps : false,
    }
);
