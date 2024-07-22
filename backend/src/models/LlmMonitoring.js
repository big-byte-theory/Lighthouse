import mongoose from "mongoose";

const MonitoringSchema = new mongoose.Schema({
  monitoring_id: {
    type: Number,
    unique: true,
  },
  monitoring: {
    type: String,
  },
});

const llmMonitoring = mongoose.model('llm_monitoring', MonitoringSchema);

export default llmMonitoring;