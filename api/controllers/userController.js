'use strict'
var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  bcrypt = require('bcrypt'),
  User = mongoose.model('User');
exports.register = function(req, res){
  var newUser = new User(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  newUser.save(function(err, user) {
    if (err) {
      return res.status(400).send({code: 1,
        message: err
      });
    } else {
      user.hash_password = undefined;
      return res.json({code:0,data:user});
    }
  });
}
exports.sign_in = function(req, res){
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;
    if (!user) {
      res.status(200).json({code:20003,  message: 'Authentication failed. User not found.' });
    } else if (user) {
      if (!user.comparePassword(req.body.password)) {
        res.status(200).json({code:20003,  message: 'Authentication failed. Wrong password.' });
      } else {
        return res.json({code:0,data: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id})});
      }
    }
  });
}
exports.loginRequired = function(req, res, next){
  if (req.user) {
    next();
  } else {
    return res.status(200).json({code:20003, message: 'Unauthorized user!' });
  }
}