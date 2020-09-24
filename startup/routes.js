const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const error = require('../errors/errors');
const userRoute = require('../routes/users');
const messageRoute = require('../routes/messages');

module.exports = function (app) {
    mongoose.set('useFindAndModify', false);
    app.use(error);
    app.use(cors());
    app.use(express.static('public'));
    app.use(express.urlencoded());
    app.use(express.json());
    app.use(helmet());
    app.set('view engine', 'ejs');
    app.use('/api/users', userRoute);
    app.use('/', messageRoute);
}