import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3 },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
