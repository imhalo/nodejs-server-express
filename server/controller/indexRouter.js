/**
 *
 * prefix = '/index'
 */

var express = require('express');
var router = express.Router();
var logger = require('../logger').getLogger('iindex');
var logger1 = require('../logger').getLogger('iiindex');


function prefix(app){
  app.use('/index', router);
}

router.get('/', function(req, res, next) {
  console.log('console log');
  console.info('console info');
  console.error('console err');
  logger.info('test log info');
  logger.error('test log error');
  logger.debug('test log debug');
  logger1.info('test log info');
  logger1.error('test log error');
  logger1.debug('test log debug');
  res.render('index', { title: 'Express' });
});

module.exports = prefix;
