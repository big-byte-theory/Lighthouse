import mongoose from "mongoose";

const LlmSchema = new mongoose.Schema({
  type_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  organisation_id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date_id: {
    type: Date,
    required: true,
  },
  url_id: {
    type: String,
    required: true,
  },
  datasheet: {
    type: String,
    required: true,
  },
  modality_id: {
    type: String,
    required: true,
  },
  size_id: {
    type: String,
    required: true,
  },
  sample: {
    type: String,
    required: true,
  },
  analysis: {
    type: String,
    required: true,
  },
  dependencies_id: {
    type: String,
    required: true,
  },
  included: {
    type: String,
    required: true,
  },
  excluded: {
    type: String,
    required: true,
  },
  quality_control: {
    type: String,
    required: true,
  },
  access_id: {
    type: String,
    required: true,
  },
  license: {
    type: String,
    required: true,
  },
  intended_use: {
    type: String,
    required: true,
  },
  prohibited_uses: {
    type: String,
    required: true,
  },
  monitoring: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  model_type_id: {
    type: String,
    required: true,
  },
  training_emissions: {
    type: String,
    required: true,
  },
  training_time: {
    type: String,
    required: true,
  },
  training_hardware: {
    type: String,
    required: true,
  },
  adaptation: {
    type: String,
    required: true,
  },
  output_space: {
    type: String,
    required: true,
  },
  terms_of_service: {
    type: String,
    required: true,
  },
  monthly_active_users: {
    type: Number,
    required: true,
  },
  user_distribution: {
    type: String,
    required: true,
  },
  failures: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const llm = mongoose.model('llm_data', LlmSchema);

export default llm;