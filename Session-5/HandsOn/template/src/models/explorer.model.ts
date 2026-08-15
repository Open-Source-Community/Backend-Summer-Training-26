import mongoose from "mongoose";

const explorerSchema = new mongoose.Schema({
  explorerId: String,
  name: String,
  role: String,
  age: Number,
  island: String,
});

export const Explorer = mongoose.model("Explorer", explorerSchema);