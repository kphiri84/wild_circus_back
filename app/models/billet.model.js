module.exports = (sequlize, Sequelize) => {
    const Billet = sequlize.define("billets", {
        
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
    })

    return Billet;
}