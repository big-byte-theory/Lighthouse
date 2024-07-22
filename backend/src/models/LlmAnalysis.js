import mongoose from "mongoose";

const AnalysisSchema = new mongoose.Schema({
  analysis_id: {
    type: Number,
    unique: true,
  },
  analysis: {
    type: String,
  },
});

const llmCreatedDate = mongoose.model('llm_analysis', AnalysisSchema);

export default llmCreatedDate;