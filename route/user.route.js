const router = require('express').Router();
const {user} = require('../controller');


router.route('/signup')
	// POST api/auth/user/signup
	.post(user.createUser);

// router.route('/login')
// 	// POST api/auth/user/login
// 	.post(user)



module.exports = router;