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

const LlmMonitoring = mongoose.model('llm_monitoring', MonitoringSchema, 'llm_monitoring');

export default LlmMonitoring;