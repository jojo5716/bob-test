/* eslint-disable no-param-reassign */
const db = require('../models');


const Card = db.card;

function findAll() {
    return Card.find();
}

module.exports = {
    findAll,
};
