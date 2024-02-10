const express = require('express');
const router = express.Router();
const { createProduct , getAllProducts} = require('../Controller/producController');

router.post('/uploadProduct', createProduct);

router.get('/products', getAllProducts);

module.exports = router;
