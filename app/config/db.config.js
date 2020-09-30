module.exports = {
    HOST: "eu-cdbr-west-03.cleardb.net",
    USER: "b84021cb35f954",
    PASSWORD: "91104b95",
    DB: "heroku_0e7f1878f7bf5e8",
    dialect: "mysql",
    port: 3306,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}