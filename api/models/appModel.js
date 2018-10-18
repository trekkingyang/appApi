'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var appSchema = new Schema({
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
  createDate: {
    type: Date,
    default: Date.now()
  }
});
module.exports = mongoose.model('APP', appSchema);
