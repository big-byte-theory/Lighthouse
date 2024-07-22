import mongoose from "mongoose";

const QualityControlSchema = new mongoose.Schema({
  quality_control_id: {
    type: Number,
    unique: true,
  },
  quality_control: {
    type: String,
  },
});

const LlmQualityControl = mongoose.model('llm_quality_control', QualityControlSchema);

export default LlmQualityControl;