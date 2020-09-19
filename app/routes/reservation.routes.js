

module.exports = function(app) {
	app.use(function(req, res, next) {
		res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
		next();
	});
};

const models = require('../models');

module.exports = (app) => {
	app.get('/reservations', (req, res) => {
		models.reservation
			.findAll()
			.then((resa) => res.json(resa));
	});

	app.post('/reservations', (req, res) => {
		models.reservation.create(req.body).then((resa) => res.json(resa));
	});
};
