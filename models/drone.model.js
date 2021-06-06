const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Drone = mongoose.model('Drone', Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
  }));

module.exports = Drone;
