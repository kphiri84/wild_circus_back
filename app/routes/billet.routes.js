

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
};

 
const models = require("../models");

module.exports = (app) => {
  app.get("/billets", (req, res) => {
    models.billet.findAll()
        .then((billet) => res.json(billet));
  });

  app.post("/billets", (req, res) => {
    models.billet.create(req.body).then((billet) => res.json(billet));
  });
};