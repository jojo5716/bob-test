const mongoose = require('mongoose');


const MONGO_URL = 'mongodb://localhost:27017/bob_test';
const db = {};

db.mongoose = mongoose;
db.url = MONGO_URL;

db.card = require('./card')(mongoose);

module.exports = db;
