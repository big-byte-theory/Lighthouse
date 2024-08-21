import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
  url_id: {
    type: Number,
    unique: true,
  },
  url: {
    type: String,
  },
});

const LlmUrl = mongoose.model('llm_url', UrlSchema);

export default LlmUrl;