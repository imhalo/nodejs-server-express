/**
 * Created by Halo on 16/3/27.
 */

"use strict"

var util = require('util');
var log4js = require('log4js');
var config = require('../../config');
var log4jsConfig = require('./log4js.json');

var app_root = process.cwd();

class OurLogger {
    constructor(theLogger){
        this.logger = theLogger
    }

    info(){
        this.logger.info.apply(this.logger, arguments);
    }

    error(){
        this.logger.error.apply(this.logger, arguments);
    }
}

class LoggerFactory {
    constructor(){
        log4js.configure(log4jsConfig);
    }

    getLogger(loggerCategoryName){
        log4js.loadAppender('file');
        //log4js.addAppender(log4js.appenders.file('logs/'+(loggerCategoryName || 'logger')+'.log'), (loggerCategoryName || 'logger'));
        log4js.addAppender(log4js.appenders.file('logs/logger.log'), (loggerCategoryName || 'logger'));
        var logger = log4js.getLogger(loggerCategoryName || 'logger');
        logger.setLevel('DEBUG');
        return new OurLogger(logger);
    }

    log4js(){
        return log4js;
    }
}

var loggerFactory = new LoggerFactory();

module.exports = loggerFactory;
