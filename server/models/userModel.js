import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  title: { type: String },
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String },
  active: { type: Boolean },
  language: { type: Array },
  email: { type: String, unique: true, required: true },
  phoneNumber: { type: String },
  password: { type: String, minlength: 3, maxlength: 1024, required: true },
});

const Users = mongoose.model("Users", userSchema);

export default Users;
