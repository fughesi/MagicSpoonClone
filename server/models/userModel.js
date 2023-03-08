import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  title: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  role: { type: String },
  active: { type: Boolean },
  language: { type: String },
  email: { type: String },
  phoneNumber: { type: Number },
  password: { type: String },
});

const Users = mongoose.model("Users", userSchema);

export default Users;
