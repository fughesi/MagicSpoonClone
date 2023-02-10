import mongoose from "mongoose";

const cerealSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 50 },
  price: { type: Number, required: true },
  image: { data: Buffer, contentType: String },
});

const Cereals = mongoose.model("Cereals", cerealSchema);

export default Cereals;