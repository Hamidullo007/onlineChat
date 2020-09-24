require('express-async-errors');
require('winston-mongodb');
const winston = require('winston');
const config = require('config');

const mongoUrlErrors = config.get('mongoUrlErrors');

module.exports = function () {
    winston.add(new winston.transports.Console());
    winston.add(new winston.transports.MongoDB({ db: mongoUrlErrors, level: 'error' }));
    //winston.exceptions.handle(new winston.transports.Console());
    process.on('uncaughtException', ex => {
        throw ex;
    });
    process.on('unhandledRejection', ex => {
        throw ex;
    });
}