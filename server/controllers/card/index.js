/* eslint-disable max-statements */
const express = require('express');

const cardApi = require('../../api/card');


const router = express.Router();


router
    .get('/list/', async (req, res) => {
        const cards = await cardApi.findAll();
       
        res.json(
            cards
        );
    })

    

module.exports = router;
