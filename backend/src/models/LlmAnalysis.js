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

const LlmAnalysis = mongoose.model('llm_analysis', AnalysisSchema, 'llm_analysis');

export default LlmAnalysis;