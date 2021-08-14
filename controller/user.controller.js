const User = require("../model/user.model");


const createUser = async (req, res, next) => {
	try {
		console.log('inside controller');		
	} catch (error) {
		console.log(error);
	}
};




module.exports = {
	createUser
}