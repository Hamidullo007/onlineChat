const mongoose = require('mongoose');
//const Joi = require('joi');

const Schema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    userDate: {
        type: Date,
        default: Date.now
    },
    ip: {
        type: String
    }
});

module.exports = new mongoose.model('UsEr', Schema);
