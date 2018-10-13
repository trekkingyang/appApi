'use strict'
var mongoose = require('mongoose'),
  listData = mongoose.model('Category');
exports.list_all = function (req, res) {
  listData.find({appName: req.body.appName}, function(err, task) {
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

exports.delete_item = function(req, res) {
  listData.remove({
    _id: req.params.id
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'data successfully deleted' });
  });
};
