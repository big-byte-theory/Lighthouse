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

const llmModality = mongoose.model('llm_modality', ModalitySchema);

export default llmModality;