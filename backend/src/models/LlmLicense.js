import mongoose from "mongoose";

const LicensesSchema = new mongoose.Schema({
  license_id: {
    type: Number,
    unique: true,
  },
  license: {
    type: String,
  },
});

const LlmLicense = mongoose.model('llm_license', LicensesSchema);

export default LlmLicense;