var mongoose = require('mongoose');
var dbport = 'mongodb://tinnrplusplus:tinnrplusplus@ds039175.mongolab.com:39175/tinnrplusplus'
var port = dbport || 'mongodb://localhost/tinnr';

var db = mongoose.connect(port);

module.exports = db;
