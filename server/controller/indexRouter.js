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
  //console.log('8888');
  logger.info(req.path);
  logger.error('inde');
  logger1.info(req.path);
  logger1.error('inde');
  res.render('index', { title: 'Express' });
});

module.exports = prefix;
