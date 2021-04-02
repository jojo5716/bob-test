const mongoose = require('mongoose');


const {
    MONGO_DB,
    MONGO_HOST = 'localhost',
    MONGO_PORT = 27017,
} = process.env;

const MONGO_URL = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

const db = {};

db.mongoose = mongoose;
db.url = MONGO_URL;

db.card = require('./card')(mongoose);

module.exports = db;
