import mongoose from "mongoose";

const DatasheetSchema = new mongoose.Schema({
  datasheet_id: {
    type: Number,
    unique: true,
  },
  datasheet: {
    type: String,
  },
});

const llmDatasheet = mongoose.model('llm_datasheet', DatasheetSchema);

export default llmDatasheet;