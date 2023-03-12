import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  image: String,
});

export default mongoose.model("Post", postSchema);
