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

const llmAccess = mongoose.model('llm_access', AccessSchema);

export default llmAccess;