import mongoose from "mongoose";

const UserDistributionSchema = new mongoose.Schema({
  user_distribution_id: {
    type: Number,
    unique: true,
  },
  user_distribution: {
    type: String,
  },
});

const LlmUserDistribution = mongoose.model('llm_user_distribution', UserDistributionSchema);

export default LlmUserDistribution;