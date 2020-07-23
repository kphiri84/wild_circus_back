const Sequelize = require('sequelize')
const db = require('../database/db')
const User = require('./User')
const Reservation = require('./Reservation')

module.exports = db.sequelize.define(
    'user',
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

User.associate = () =>{
    User.hasMany(Reservation, { foreignKey: 'reservation_id' })
}