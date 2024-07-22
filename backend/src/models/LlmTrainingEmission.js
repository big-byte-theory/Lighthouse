import mongoose from "mongoose";

const TrainingEmissionSchema = new mongoose.Schema({
  training_emission_id: {
    type: Number,
    unique: true,
  },
  training_emission: {
    type: String,
  },
});

const llmTrainingEmission = mongoose.model('llm_training_emission', TrainingEmissionSchema);

export default llmTrainingEmission;