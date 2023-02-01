import mongoose from "mongoose";

const testimonialsSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 45 },
  statement: { type: String, required: true, minlength: 5 },
  rating: { type: Number },
});

const Testimonials = mongoose.model("Testimonials", testimonialsSchema);

export default Testimonials;
