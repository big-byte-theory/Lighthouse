const mongoose = require('mongoose');

const ModalitySchema = new mongoose.Schema({
  modality_name: { type: String, required: true }
});

module.exports = mongoose.model('Modality', ModalitySchema);