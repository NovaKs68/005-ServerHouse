require('../../config/database');
const winston = require('winston');
require('winston-daily-rotate-file');

const transport = new (winston.transports.DailyRotateFile)({
    filename: './server/log/%DATE%.log',
    datePattern: 'MMDD',
    zippedArchive: true,
    maxFiles: '7d',
    level: 'warn', //TODO : remove logger-prod.js and replace lvl: XXX by lvl: process.env.LOG_LEVEL  (from .env file) - also remove logger-prod.js from docker-compose.yml

});


const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(i => `${i.timestamp} | ${i.level} | ${i.message}`)
    ),
    transports: [
        transport
    ]
});


module.exports = logger;
