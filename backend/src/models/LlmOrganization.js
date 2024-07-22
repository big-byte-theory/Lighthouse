import mongoose from "mongoose";

const OrganizationSchema = new mongoose.Schema({
  organization_id: {
    type: Number,
    required: [true, "Organization id is required"],
  },
  organization: {
    type: String,
    required: [true, "Organization name is required"],
  },
});

const LlmOrganization = mongoose.model('llm_organization', OrganizationSchema);

export default LlmOrganization;