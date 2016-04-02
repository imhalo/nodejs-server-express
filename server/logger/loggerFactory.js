/**
 * Created by Halo on 16/3/27.
 */

"use strict"

var util = require('util');
var log4js = require('log4js');
var config = require('../../config');
//var log4jsConfig = require('./log4js.json');
var log4jsConfig = require('./log4js.conf.json');

var app_root = process.cwd();

class CustomLogger {
    constructor(theLogger){
        this.logger = theLogger;
        this.logger.setLevel("DEBUG");
    }

    debug(){
        this.logger.debug.apply(this.logger, arguments);
        var debugLog = log4js.getLogger('dLog');
        debugLog.setLevel(log4js.levels.DEBUG);
        debugLog.debug.apply(debugLog,arguments);
    }

    info(){
        this.logger.info.apply(this.logger, arguments);
        console.log('----------');
        console.log('66', this.logger);
        var infoLog = log4js.getLogger('iLog');
        infoLog.setLevel(log4js.levels.INFO);
        infoLog.info.apply(infoLog,arguments);
    }

    error(){
        this.logger.error.apply(this.logger, arguments);
        var errorLog = log4js.getLogger('eLog');
        errorLog.setLevel(log4js.levels.ERROR);
        errorLog.error.apply(errorLog,arguments);
    }
}

class LoggerFactory {
    constructor(){
        log4js.configure(log4jsConfig);
    }

    getLogger(loggerCategoryName){
        //log4js.loadAppender('file');
        ////log4js.addAppender(log4js.appenders.file('logs/'+(loggerCategoryName || 'logger')+'.log'), (loggerCategoryName || 'logger'));
        //log4js.addAppender(log4js.appenders.file('logs/logger.log'), (loggerCategoryName || 'logger'));
        log4js.loadAppender('datefile');
        log4js.addAppender(log4js.appenderMakers['dateFile']({
            "filename":"logs/logger",
            "pattern": "-yyyy-MM-dd.log",
            "alwaysIncludePattern": true
        }),(loggerCategoryName || 'logger'));
        var logger = log4js.getLogger(loggerCategoryName || 'logger');
        //logger.setLevel('DEBUG');
        return new CustomLogger(logger);
    }

    log4js(){
        return log4js;
    }
}

var loggerFactory = new LoggerFactory();

module.exports = loggerFactory;
