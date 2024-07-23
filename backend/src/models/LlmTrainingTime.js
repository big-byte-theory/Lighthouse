import mongoose from "mongoose";

const TrainingTimeSchema = new mongoose.Schema({
  training_time_id: {
    type: Number,
    unique: true,
  },
  training_time: {
    type: String,
  },
});

const LlmTrainingTime = mongoose.model('llm_training_time', TrainingTimeSchema);

export default LlmTrainingTime;