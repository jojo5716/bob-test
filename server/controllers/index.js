const express = require('express');

const cardRoutes = require('./card');


const router = express.Router();

router.use('/ajax/card', cardRoutes);


module.exports = router;
