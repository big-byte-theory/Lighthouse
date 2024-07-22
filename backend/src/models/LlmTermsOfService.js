import mongoose from "mongoose";

const TermsOfServiceSchema = new mongoose.Schema({
  terms_of_service_id: {
    type: Number,
    unique: true,
  },
  terms_of_service: {
    type: String,
  },
});

const llmTermsOfService = mongoose.model('llm_terms_of_service', TermsOfServiceSchema);

export default llmTermsOfService;