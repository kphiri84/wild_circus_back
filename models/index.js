const config = require("../database/db.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
      max: 10,
      min: 0,
      acquire: 3000,
      idle: 10000
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/User.js"),(sequelize, Sequelize);
db.billet = require("../models/Billet.js"),(sequelize, Sequelize);
db.reservation = require("../models/Reservation.js"),(sequelize, Sequelize);

;
db.reservation.belongsTo(db.user, {
  through: "user_resas",
  foreignKey: "reservation_id",
  otherKey: "userId",
});


module.exports = db;
