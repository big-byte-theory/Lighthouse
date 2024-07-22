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

const url = mongoose.model('llm_url', UrlSchema);

export default url;