import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log(" Connected to MongoDB");
  } catch (error) {
    console.log(" Connection Failed");
    console.log(error);
  }
}