import mongoose from "mongoose";

const TypeSchema = new mongoose.Schema({
  type_id: {
    type: Number,
    unique: true,
  },
  type: {
    type: String,
  },
});

const type = mongoose.model('llm_type', TypeSchema);

export default type;