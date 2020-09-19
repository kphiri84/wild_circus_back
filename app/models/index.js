const config = require("../config/db.config.js")

const Sequelize = require("sequelize")
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HODT,
        dialect: config.dialect,
        operatorsAliases: false,

        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize)
db.reservation = require("../models/reservation.model.js")(sequelize, Sequelize)
db.billet = require("../models/billet.model.js")(sequelize, Sequelize)

db.reservation.belongsTo(db.user)
db.user.hasMany(db.reservation)

module.exports = db;