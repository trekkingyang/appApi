'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CategorySchema = new Schema({
  chineseName: {
    type: String,
    required: true
  },
  englishName: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  appName: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Category', CategorySchema);
