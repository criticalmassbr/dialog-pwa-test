'use strict';

const express = require('express');
const router = express.Router();
const controller = require('..controllers/product-controller');

router.post('/', controller.post);
router.put('/id', controller.post);
router.delete('/', controller.delete);


const create = router.post('/', (req, res, next) => {
    res.status(200).send(req.body);
});

const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id:id,
        item: req.body
    });
});
const del = router.delete('/', (req, res, next) => {
        res.status(200).send(req.body);  
});

module.exports = router;