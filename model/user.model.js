const Sequelize = require('sequelize');
const db = require('../config/db');


const User = db.define('user', {
	userID: {
		type: Sequelize.INTEGER.UNSIGNED,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: true
	},
	salutation: {
		type: Sequelize.STRING,
		allowNull: true,
		defaultValue: null
	},
	firstName: {
		type: Sequelize.STRING,
		allowNull: true,
		defaultValue: null
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: true,
		defaultValue: null
	},
	phone: {
		type: Sequelize.STRING(100),
		allowNull: true
	},
	signUpDate: {
		type: Sequelize.DATE,
		allowNull: true,
		defaultValue: Sequelize.NOW
	},
	avatarPath: {
		type: Sequelize.STRING,
		allowNull: true
	},
	lastLogin: {
		type: Sequelize.DATE,
		allowNull: true
	},
	modifiedOn: {
		type: Sequelize.DATE,
		allowNull: true
	},
	agreeToTerms: {
		type: Sequelize.BOOLEAN,
		defaultValue: 0
	},
	marketingEmails: {
		type: Sequelize.BOOLEAN,
		defaultValue: 0
	},
	deleted: {
		type: Sequelize.BOOLEAN,
		defaultValue: 0
	},
	correspondenceAddress: {
		type: Sequelize.STRING,
		defaultValue: null,
		allowNull: true
	},
	correspondencePostalCode: {
		type: Sequelize.STRING,
		defaultValue: null,
		allowNull: true
	},
	correspondenceCity: {
		type: Sequelize.STRING,
		defaultValue: null,
		allowNull: true
	},
	correspondenceCountryCode: {
		type: Sequelize.STRING,
		defaultValue: null,
		allowNull: true
	},
	correspondenceAddressLineTwo: {
		type: Sequelize.STRING,
		defaultValue: null,
		allowNull: true
	},
});

module.exports = User;
