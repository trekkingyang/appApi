'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ListSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  thumb: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  appName: {
    type: String,
    required: true
  },
  advertisement: {
    type: Boolean,
    default: false
  },
  source: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  videoId: {
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('List', ListSchema);
