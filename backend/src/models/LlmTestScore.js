import mongoose from "mongoose";

const TestScoreSchema = new mongoose.Schema({
  model: {
    type: String,
  },
  tests: [{
    test_name: {
      type: String,
    },
    metric: {
      type: String,
    },
    subsets: [{
      score: {
        type: Number,
      },
    }],
  }],
});

const llmTestScore = mongoose.model('llm_test_score', TestScoreSchema);

export default llmTestScore;