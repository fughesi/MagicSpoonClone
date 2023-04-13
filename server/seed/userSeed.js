import mongoose from "mongoose";
import Users from "../models/userModel.js";
import { nanoid } from "nanoid";

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
    id: nanoid(),
    username: "navySEAL",
    title: "Mr.",
    firstName: "jocko",
    lastName: "Wilnik",
    role: "bossman",
    age: 33,
    active: true,
    language: ["english"],
    homeAddress: {
      number: "123",
      street: "Elm street",
      city: "Tampa",
      state: "FL",
      zipCode: "33606",
    },
    shippingAddress: {
      number: "123",
      street: "Elm street",
      city: "Tampa",
      state: "FL",
      zipCode: "33606",
    },
    email: "sealteam6@yahoo.com",
    phoneNumber: 9015551212,
    password: "123",
  }),
  new Users({
    id: nanoid(),
    username: "sprouts",
    title: "Mr.",
    firstName: "jeff",
    lastName: "brussels",
    role: "bitchboy",
    active: true,
    age: 33,
    language: ["english"],
    homeAddress: {
      number: "123",
      street: "Elm street",
      city: "Tampa",
      state: "FL",
      zipCode: "33606",
    },
    shippingAddress: {
      number: "123",
      street: "Elm street",
      city: "Tampa",
      state: "FL",
      zipCode: "33606",
    },
    email: "mojo@pm.com",
    phoneNumber: 8885551212,
    password: "123",
  }),
  new Users({
    id: nanoid(),
    username: "datBitch",
    title: "Mrs.",
    firstName: "barbara",
    lastName: "flanahan",
    role: "offical karen",
    active: true,
    age: 33,
    language: ["english"],
    homeAddress: {
      number: "123",
      street: "Elm street",
      city: "Tampa",
      state: "FL",
      zipCode: "33606",
    },
    shippingAddress: {
      number: "123",
      street: "Elm street",
      city: "Tampa",
      state: "FL",
      zipCode: "33606",
    },
    email: "speakstomanager@gmail.com",
    phoneNumber: 9015557474,
    password: "123",
  }),
  new Users({
    id: nanoid(),
    username: "elHombre",
    title: "Mr.",
    firstName: "juan",
    lastName: "hernandez",
    age: 33,
    role: "bossman",
    active: true,
    language: ["english", "spanish"],
    homeAddress: {
      number: "123",
      street: "Elm street",
      city: "Tampa",
      state: "FL",
      zipCode: "33606",
    },
    shippingAddress: {
      number: "123",
      street: "Elm street",
      city: "Tampa",
      state: "FL",
      zipCode: "33606",
    },
    email: "disGuy@yahoo.com",
    phoneNumber: 9015551212,
    password: "123",
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
