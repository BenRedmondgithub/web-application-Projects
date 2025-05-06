const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  uid: String,
  title: String,
  complete : Boolean,
});

module.exports = mongoose.model('Task', taskSchema);