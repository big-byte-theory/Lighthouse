const mongoose = require('mongoose');

const LlmDependenciesSchema = new mongoose.Schema({
  llm_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Llm',
    required: true,
  },
  type_id: {
    type: String,
    required: true,
  },
  documents: {
    type: Number,
    required: true,
  },
  avg_document_size: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('LlmDependencies', LlmDependenciesSchema);