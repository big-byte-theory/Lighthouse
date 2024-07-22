import mongoose from "mongoose";

const MonthlyActiveUserSchema = new mongoose.Schema({
  monthly_active_users_id: {
    type: Number,
    unique: true,
  },
  monthly_active_users: {
    type: String,
  },
});

const LlmMonthlyActiveUser = mongoose.model('llm_monthly_active_user', MonthlyActiveUserSchema);

export default LlmMonthlyActiveUser;