import mongoose from "mongoose";

const TypeSchema = new mongoose.Schema({
  type_id: {
    type: Number,
    unique: true,
  },
  type: {
    type: String,
  },
});

const LlmType = mongoose.model('llm_type', TypeSchema);

export default LlmType;