const mongoose = require('mongoose');

const DateSchema = new mongoose.Schema({
  create_date: { type: Date, required: true }
});

module.exports = mongoose.model('Date', DateSchema);