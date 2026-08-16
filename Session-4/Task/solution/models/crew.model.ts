import mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
  missionId: {
    type: Number,
    required: true,
  },
  islandName: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
    default: "Not Started",
  },
});

const crewSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["Captain", "Navigator", "Guide", "Guard", "Cook"],
  },
  age: {
    type: Number,
    required: true,
  },
  missions: {
    type: [missionSchema],
    default: [],
  },
});

export const CrewMember = mongoose.model("CrewMember", crewSchema);