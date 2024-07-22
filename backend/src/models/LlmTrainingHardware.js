import mongoose from "mongoose";

const TrainingHardwareSchema = new mongoose.Schema({
  training_hardware_id: {
    type: Number,
    unique: true,
  },
  training_hardware: {
    type: String,
  },
});

const LlmTrainingHardware = mongoose.model('llm_training_hardware', TrainingHardwareSchema);

export default LlmTrainingHardware;