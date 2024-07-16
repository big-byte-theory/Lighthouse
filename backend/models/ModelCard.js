const mongoose = require('mongoose');

const ModelCardSchema = new mongoose.Schema({
  model_type: { type: String, required: true },
  model_link: { type: String, required: true }
});

module.exports = mongoose.model('ModelCard', ModelCardSchema);