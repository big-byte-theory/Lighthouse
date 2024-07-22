import mongoose from "mongoose";

const DescriptionSchema = new mongoose.Schema({
  description_id: {
    type: Number,
    unique: true,
  },
  description: {
    type: String,
  },
});

const description = mongoose.model('llm_description', DescriptionSchema);

export default description;