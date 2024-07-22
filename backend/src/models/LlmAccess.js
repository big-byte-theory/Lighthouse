import mongoose from "mongoose";

const AccessSchema = new mongoose.Schema({
  access_id: {
    type: Number,
    unique: true,
  },
  access: {
    type: String,
  },
});

const LlmAccess = mongoose.model('llm_access', AccessSchema, 'llm_access');

export default LlmAccess;