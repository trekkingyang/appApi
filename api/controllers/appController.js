'use strict'
var mongoose = require('mongoose'),
  appData = mongoose.model('APP');
exports.list_all = function (req, res) {
  appData.find({}, function(err, data) {
    if (err)
      res.send({code:1 ,message:err});
    res.json({code:0,data:data});
  });
}

exports.create_item = function(req, res) {
  var new_item = new appData(req.body);
  new_item.save(function(err, data) {
    if (err)
      res.send({code:1 ,message:err});
    res.json({code:0,data:data});
  });
};