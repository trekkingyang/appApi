'use strict'
var mongoose = require('mongoose'),
  listData = mongoose.model('List');
exports.list_all = function (req, res) {
  listData.find({}, function(err, task) {
    if (err)
      res.send({code:1 ,message:err});
    res.json({code:0,data:task});
  });
}

exports.list_app = function (req, res) {
  listData.find({appName: req.body.appName}, function(err, task) {
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

exports.read_item = function(req, res) {
  listData.findById(req.params.id, function(err, task) {
    if (err)
      res.send({code:1 ,message:err});
    res.json({code:0,data:task});
  });
};

exports.update_item = function(req, res) {
  listData.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send({code:1 ,message:err});
    res.json({code:0,data:task});
  });
};


exports.delete_item = function(req, res) {
  listData.remove({
    _id: req.params.id
  }, function(err, task) {
    if (err)
      res.send({code:1 ,message:err});
    res.json({code:0, message: 'data successfully deleted' });
  });
};
