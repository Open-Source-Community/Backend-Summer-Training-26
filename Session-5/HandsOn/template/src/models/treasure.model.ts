import mongoose from "mongoose";

const treasureSchema = new mongoose.Schema({
  treasureId: String,
  name: String,
  value: Number,
  location: String,
});

export const Treasure = mongoose.model("Treasure", treasureSchema);
