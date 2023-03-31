import mongoose from "mongoose";
import Users from "../models/userModel.js";

mongoose
  .set("strictQuery", false)
  .connect("mongodb://localhost:27017/MagicSpoonClone", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful"))
  .catch((error) => {
    console.log(`connection to DB failed: ${error?.message}`);
  });

const users = [
  new Users({
    username: "navySEAL",
    title: "Mr.",
    firstName: "jocko",
    lastName: "Wilnik",
    role: "bossman",
    active: true,
    language: ["english"],
    email: "sealteam6@yahoo.com",
    phoneNumber: 9015551212,
    password: "123",
    shoppingCart: [],
    savedForLater: [],
  }),
  new Users({
    username: "sprouts",
    title: "Mr.",
    firstName: "jeff",
    lastName: "brussels",
    role: "bitchboy",
    active: true,
    language: ["english"],
    email: "mojo@pm.com",
    phoneNumber: 8885551212,
    password: "123",
    shoppingCart: [],
    savedForLater: [],
  }),
  new Users({
    username: "datBitch",
    title: "Mrs.",
    firstName: "barbara",
    lastName: "flanahan",
    role: "offical karen",
    active: true,
    language: ["english"],
    email: "speakstomanager@gmail.com",
    phoneNumber: 9015557474,
    password: "123",
    shoppingCart: [],
    savedForLater: [],
  }),
  new Users({
    username: "elHombre",
    title: "Mr.",
    firstName: "juan",
    lastName: "hernandez",
    role: "bossman",
    active: true,
    language: ["english", "spanish"],
    email: "disGuy@yahoo.com",
    phoneNumber: 9015551212,
    password: "123",
    shoppingCart: [],
    savedForLater: [],
  }),
];

let doneWithSeeding = 0;
users.forEach((user) => {
  doneWithSeeding++;
  user.save();

  if (doneWithSeeding === users.length) {
    setTimeout(() => mongoose.disconnect(), 1000);
  }
});
