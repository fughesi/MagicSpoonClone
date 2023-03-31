import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  title: { type: String },
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  language: { type: Array },
  email: { type: String, unique: true, required: true },
  phoneNumber: { type: String },
  password: { type: String, minlength: 3, maxlength: 1024, required: true },
  role: { type: String },
  isActive: { type: Boolean },
  shoppingCart: { type: Array },
  savedForLater: { type: Array },
});

const Users = mongoose.model("Users", userSchema);

export default Users;
