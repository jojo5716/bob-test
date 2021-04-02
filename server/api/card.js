/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');

const db = require('../models');


const Card = db.card;

function findAll() {
    return Card.find();
}

module.exports = {
    findAll,
};