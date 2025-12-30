import mongoose from "mongoose";

export async function connectMongo() {
  await mongoose.connect(process.env.MONGO_URI!);
  console.log("MongoDB connected");
}

const LogSchema = new mongoose.Schema({
  event: String,
  payload: Object,
  createdAt: { type: Date, default: Date.now }
});

export const LogModel = mongoose.model("Log", LogSchema);
