import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    firstName: {
      type: String,
      required: [true, "Please add your first name"],
    },
    lastName: {
      type: String,
      required: [false],
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    default: "user",
  },
}, { timestamps: true });

const user = mongoose.model('user', UserSchema);

export default user;