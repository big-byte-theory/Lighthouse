const mongoose = require('mongoose');

const AccessSchema = new mongoose.Schema({
  access: { type: String, required: true }
});

module.exports = mongoose.model('Access', AccessSchema);