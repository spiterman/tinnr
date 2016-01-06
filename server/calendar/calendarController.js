var _ = require('underscore');
// var db = require('../data.js'); //May not need
var Recipe = require('./calendarModel.js');
var request = require('request');
var url = require('url');
var Q = require('q');


module.exports = {
  getDate: function(req, res, next){
    console.log('We got the date!');
    res.status(200);
    res.send('This is the response working properly!')
  }
}
