import mongoose from "mongoose";

const ModalitySchema = new mongoose.Schema({
  modality_id: {
    type: Number,
    unique: true,
  },
  modality: {
    type: String,
  },
});

const LlmModality = mongoose.model('llm_modality', ModalitySchema, 'llm_modality');

export default LlmModality;