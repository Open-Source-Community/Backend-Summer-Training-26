import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["Sailor", "Captain"],
    default: "Sailor",
  },
});

export const User = mongoose.model("User", userSchema);
