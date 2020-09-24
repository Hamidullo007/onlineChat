const express = require('express');
const app = express();
const winston = require('winston');

require('./startup/loggs')();
require('./startup/routes')(app);
require('./startup/db')();

const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    winston.info(`${port}-portni eshitishni boshladim...`)
});