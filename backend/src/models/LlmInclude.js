import mongoose from "mongoose";

const IncludesSchema = new mongoose.Schema({
  included_id: {
    type: Number,
    unique: true,
  },
  included: {
    type: String,
  },
});

const llmIncludes = mongoose.model('llm_includes', IncludesSchema);

export default llmIncludes;