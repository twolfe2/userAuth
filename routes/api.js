'use strict';


const express = require('express');



let router = express.Router();


router.use('/cruds', require('./cruds'))
router.use('/users', require('./users'));




module.exports = router;  