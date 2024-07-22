import mongoose from "mongoose";

const FailureSchema = new mongoose.Schema({
  failures_id: {
    type: Number,
    unique: true,
  },
  failures: {
    type: String,
  },
});

const llmFailures = mongoose.model('llm_failures', FailureSchema);

export default llmFailures;