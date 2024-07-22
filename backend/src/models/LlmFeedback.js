import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  feedback_id: {
    type: Number,
    unique: true,
  },
  feedback: {
    type: String,
  },
});

const llmFeedback = mongoose.model('llm_feedback', FeedbackSchema);

export default llmFeedback;