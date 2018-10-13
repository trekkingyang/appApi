'use strict'
var mongoose = require('mongoose'),
  listData = mongoose.model('List');
exports.list_all = function (req, res) {
  listData.find({appName: req.body.appName,category: req.body.category}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
}

exports.create_item = function(req, res) {
  var new_task = new listData(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_item = function(req, res) {
  listData.findById(req.params.id, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_item = function(req, res) {
  listData.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_item = function(req, res) {
  listData.remove({
    _id: req.params.id
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'data successfully deleted' });
  });
};
