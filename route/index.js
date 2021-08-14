const express = require('express');
const router = express.Router();
const user = require('./user.route');


router.use('/auth/user', user);



module.exports = router;
