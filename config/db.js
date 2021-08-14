const Sequelize = require('sequelize');
const config = require('./config');


const sequelize = new Sequelize(config.db, config.db_user, config.db_pass, {
	dialect: 'mysql',
	host: 'localhost',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000000,
		idle: 10000
    },
	timezone: "Europe/London",
	dialectOptions: {
		timezone: "local"
	},
	logging: (
		// console.log ||
		false
	),
});


module.exports = sequelize;
