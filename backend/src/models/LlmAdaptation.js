import mongoose from "mongoose";

const AdaptationSchema = new mongoose.Schema({
  adaptation_id: {
    type: Number,
    unique: true,
  },
  adaptation: {
    type: String,
  },
});

const llmCreatedDate = mongoose.model('llm_adaptation', AdaptationSchema);

export default llmCreatedDate;