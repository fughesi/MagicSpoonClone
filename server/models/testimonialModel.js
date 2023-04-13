import mongoose from "mongoose";
import { nanoid } from "nanoid";

const testimonialsSchema = new mongoose.Schema({
  // id: nanoid(),
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  title: { type: String, required: true, minlength: 3, maxlength: 45 },
  statement: { type: String, required: true, minlength: 5 },
  company: { type: String, required: true },
  rating: { type: Number },
});

const Testimonials = mongoose.model("Testimonials", testimonialsSchema);

export default Testimonials;
