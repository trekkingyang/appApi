'use strict'
var mongoose = require('mongoose'),
  listData = mongoose.model('Category');
exports.list_all = function (req, res) {
  listData.find({appName: req.query.appName}, function(err, task) {
    if (err)
      res.send({code:1 ,message:err});
    res.json({code:0,data:task});
  });
}

exports.create_item = function(req, res) {
  var new_task = new listData(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send({code:1 ,message:err});
    res.json({code:0,data:task});
  });
};

exports.delete_item = function(req, res) {
  listData.remove({
    _id: req.body.id
  }, function(err, task) {
    if (err)
      res.send({code:1 ,message:err});
    res.json({code:0, message: 'data successfully deleted' });
  });
};
