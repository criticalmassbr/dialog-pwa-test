'use scrict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Schema = new.Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'O Slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },
    descripition: {
        type: String,
        require: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: Boolean,
        required: true, 
    }]
});

module.exports = mongoose.model('Product', schema);
