import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
  type_id: {
    type: Number,
    unique: true,
  },
  type: {
    type: String,
  },
});

const LlmUrl = mongoose.model('llm_url', UrlSchema);

export default LlmUrl;