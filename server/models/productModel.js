import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: String },
  sku: { type: String, required: true },
  title: { type: String, required: true, minlength: 3, unique: true },
  description: { type: String },
  stock: { type: Number, required: true },
  price: { type: Number, required: true },
  discountPercentage: { type: Number },
  rating: { type: Number },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  ingredients: { type: Array },
  // ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredients" }],
  thumbnails: { type: Array },
  stats: { type: Object },
});

const Products = mongoose.model("Products", productSchema);

export default Products;
