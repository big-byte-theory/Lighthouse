import mongoose from "mongoose";

const TrainingEmissionSchema = new mongoose.Schema({
  training_emissions_id: {
    type: Number,
    unique: true,
  },
  training_emissions: {
    type: String,
  },
});

const LlmTrainingEmission = mongoose.model('llm_training_emission', TrainingEmissionSchema);

export default LlmTrainingEmission;