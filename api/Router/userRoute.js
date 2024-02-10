const express = require('express');

const { userCreate } = require('../Controller/userController');

const router = express.Router();



router.post('/',userCreate);




module.exports = router;