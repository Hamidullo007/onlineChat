const winston = require('winston');

module.exports = function (err, req, res, next){
    winston.error("Serverda qandaydur xatolik sodir bo'ldi.");
}