const mongoose = require('mongoose');

const TypeSchema = new mongoose.Schema({
  type_name: { type: String, required: true }
});

module.exports = mongoose.model('Type', TypeSchema);