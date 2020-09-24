const mongoose = require('mongoose');
const Joi = require('joi');

const Schema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    ip: {
        type: String
    }
});

module.exports = new mongoose.model("MessagE", Schema);
