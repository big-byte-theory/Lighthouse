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

const llmLicense = mongoose.model('llm_license', LicensesSchema);

export default llmLicense;