const Sequelize = require('sequelize')
const db = require('../database/db')
const Reservation = require('./Reservation')
const User = require('./User')

module.exports = db.sequelize.define(
    'reservation',
    {
        reservationDate : {
            type : Sequelize.DATE
        },
        sessionStart : {
            type : Sequelize.DATE
        },
        sessionEnd: {
            type : Sequelize.DATE
        },
        nbParticipant: {
            type : Sequelize.INTEGER
        },
        price: {
            type : Sequelize.INTEGER
        },
    }, 
    {
        timestamps : false,
    }
)

Reservation.associate = () =>{
    Reservation.belongsTo(User, {  foreignKey: 'user_id' })
}