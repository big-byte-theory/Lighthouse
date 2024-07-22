import mongoose from "mongoose";

const OutputSpacesSchema = new mongoose.Schema({
  output_space_id: {
    type: Number,
    unique: true,
  },
  output_space: {
    type: String,
  },
});

const llmOutputSpace = mongoose.model('llm_output_space', OutputSpacesSchema);

export default llmOutputSpace;