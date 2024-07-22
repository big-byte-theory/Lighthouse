import mongoose from "mongoose";

const ExclusionSchema = new mongoose.Schema({
  excluded_id: {
    type: Number,
    unique: true,
  },
  excluded: {
    type: String,
  },
});

const LlmExcluded = mongoose.model('llm_exclusion', ExclusionSchema);

export default LlmExcluded;