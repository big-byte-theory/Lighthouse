import mongoose from "mongoose";

const LlmSchema = new mongoose.Schema({
  type_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_type',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  organisation_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LlmOrganization',
    required: true,
  },
  description_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_description',
    required: true,
  },
  created_date_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_created_date',
    required: true,
  },
  url_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_url',
    required: true,
  },
  datasheet_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_datasheet',
    required: true,
  },
  modality_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_modality',
    required: true,
  },
  size_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_size',
    required: true,
  },
  sample_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  analysis_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_analysis',
    required: true,
  },
  dependencies_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_dependencies',
    required: true,
  },
  included_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_included',
    required: true,
  },
  excluded_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_excluded',
    required: true,
  },
  quality_control_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_quality_control',
    required: true,
  },
  access_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_access',
    required: true,
  },
  license_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_license',
    required: true,
  },
  intended_uses_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_intended_use',
    required: true,
  },
  prohibited_uses_id: {
    type: String,
    ref: 'llm_prohibited_use',
    required: true,
  },
  monitoring_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_monitoring',
    required: true,
  },
  feedback_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_feedback',
    required: true,
  },
  model_type_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_model_type',
    required: true,
  },
  training_emissions_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_training_emission',
    required: true,
  },
  training_time_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_training_time',
    required: true,
  },
  training_hardware_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_training_hardware',
    required: true,
  },
  adaptation_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_adaptation',
    required: true,
  },
  output_space_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_output_space',
    required: true,
  },
  terms_of_service_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_terms_of_service',
    required: true,
  },
  monthly_active_users_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_monthly_active_user',
    required: true,
  },
  user_distribution_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_user_distribution',
    required: true,
  },
  failures_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'llm_failure',
    required: true,
  },
}, { timestamps: true });

const Llm = mongoose.model('llm_data', LlmSchema);

export default Llm;