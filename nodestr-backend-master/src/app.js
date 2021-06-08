'use strict';

const app = express();
const router = express.Router();

//Conecta ao Banco
mongoose.connect('mongodb+srv://srv1.3sup7.mongodb.net/<sr1>');

//Carrega os Models
const Product = require('./models/product');

//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const create = router.post('/', (req, res, next) => {
    res.status(200).send(req.body);
});

const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
});
const del = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;