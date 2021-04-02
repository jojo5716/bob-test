const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const controllers = require('./controllers/');
const db = require('./models');

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json());

app.use(cors());

app.use(controllers);

db.mongoose
    .connect(db.url)
    .then(() => {
        console.log('DB connected');
    })
    .catch((error) => {
        console.log(error);
    });

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');

    next();
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
