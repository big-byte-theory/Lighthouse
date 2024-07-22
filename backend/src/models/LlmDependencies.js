import mongoose from "mongoose";

const DependenciesSchema = new mongoose.Schema({
  dependencies_id: {
    type: Number,
    unique: true,
  },
  dependencies: [{
    type: String,
  }],
  dependencies_llm_ids: [{
    type: String,
  }],
});

const llmDependencies = mongoose.model('llm_dependencies', DependenciesSchema);

export default llmDependencies;