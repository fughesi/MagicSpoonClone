import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  title: { type: String },
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, min: 1 },
  language: { type: Array },
  email: { type: String, unique: true, required: true, lowercase: true },
  phoneNumber: { type: String },
  homeAddress: {
    number: { type: String },
    street: { type: String },
    city: { type: String },
    state: { type: String, uppercase: true },
    zipCode: { type: String },
  },
  shippingAddress: {
    number: { type: String },
    street: { type: String },
    city: { type: String },
    state: { type: String, uppercase: true },
    zipCode: { type: String },
  },
  password: { type: String, minlength: 3, maxlength: 1024, required: true },
  role: { type: String },
  isActive: { type: Boolean },
  shoppingCart: [
    {
      id: { type: mongoose.SchemaTypes.ObjectId, ref: "Products" },
      quantity: { type: Number, default: 1 },
    },
  ],
  savedForLater: [
    {
      id: { type: mongoose.SchemaTypes.ObjectId, ref: "Products" },
      quantity: { type: Number, default: 1 },
    },
  ],
  createdAt: { type: Date, immutable: true, default: () => Date.now() },
});

const Users = mongoose.model("Users", userSchema);

export { Users };
