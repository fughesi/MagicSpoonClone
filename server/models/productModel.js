import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3 },
  description: { type: String },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  discountPercentage: { type: Number },
  rating: { type: Number },
  stock: { type: Number },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String },

  // thumbnail: { type: Image }
});

const Product = mongoose.model("Products", productSchema);

export default Product;
