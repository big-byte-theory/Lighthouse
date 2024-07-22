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

const llmExcluded = mongoose.model('llm_excluded', ExclusionSchema);

export default llmExcluded;