import mongoose from "mongoose";

const IntendedUseSchema = new mongoose.Schema({
  intended_uses_id: {
    type: Number,
    unique: true,
  },
  intended_uses: {
    type: String,
  },
});

const llmIntendedUse = mongoose.model('llm_intended_use', IntendedUseSchema);

export default llmIntendedUse;