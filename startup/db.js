const mongoose = require('mongoose');
const config = require('config');
const mongoUrl = config.get('mongoUrl');
const winston = require('winston');

module.exports = function () {
    mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            winston.info('MongoDBga ulanish hosil qilindi.');
        });
}