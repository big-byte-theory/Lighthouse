import mongoose from "mongoose";

const ProhibitedUseSchema = new mongoose.Schema({
  prohibited_uses_id: {
    type: Number,
    unique: true,
  },
  prohibited_uses: {
    type: String,
  },
});

const LlmProhibitedUse = mongoose.model('llm_prohibited_use', ProhibitedUseSchema);

export default LlmProhibitedUse;