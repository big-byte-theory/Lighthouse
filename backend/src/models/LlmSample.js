import mongoose from "mongoose";

const SampleSchema = new mongoose.Schema({
  sample_id: {
    type: Number,
    unique: true,
  },
  sample: {
    type: String,
  },
});

const llmSample = mongoose.model('llm_sample', SampleSchema);

export default llmSample;