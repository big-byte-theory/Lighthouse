import mongoose from "mongoose";

const SizeSchema = new mongoose.Schema({
  size_id: {
    type: Number,
    unique: true,
  },
  size: {
    type: String,
  },
});

const LlmSize = mongoose.model('llm_size', SizeSchema);

export default LlmSize;