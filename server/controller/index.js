/**
 * Created by Halo on 16/3/27.
 */

"use strict"

var indexRouter = require('./indexRouter');
var userRouter = require('./userRouter');

module.exports = function(app){
    //app.use('/index', indexRouter);
    indexRouter(app);
    app.use('/user', userRouter);
}
