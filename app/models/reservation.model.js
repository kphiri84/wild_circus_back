module.exports = (sequlize, Sequelize) => {
    const Reservation = sequlize.define("reservations", {
        
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
    })

    return Reservation;
}