import mongoose from "mongoose";

const reelsSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

// Collection inside the database
export default mongoose.model("tiktokvideos", reelsSchema);
