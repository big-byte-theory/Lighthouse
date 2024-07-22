import mongoose from "mongoose";

const ModelCardSchema = new mongoose.Schema({
  model_card_id: {
    type: Number,
    unique: true,
  },
  model_card: {
    type: String,
  },
});

const LlmModelCard = mongoose.model('llm_model_card', ModelCardSchema);

export default LlmModelCard;