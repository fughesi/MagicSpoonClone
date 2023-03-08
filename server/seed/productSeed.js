import mongoose from "mongoose";
import Product from "../models/productModel.js";

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

const products = [
  new Product({
    thumbnail: "../images/cereal/1675756651067.png",
    title: "things",
    description: "awesome new product!!",
    price: 785,
    quantity: 885,
    discountPercentage: 5,
    rating: 3.5,
    stock: 9000,
    brand: "big tits",
    category: "books",
  }),
  new Product({
    thumbnail: "../images/cereal/1675756665851.png",
    title: "stuff",
    description: "awesome hell yeah!!",
    price: 75,
    quantity: 885,
    discountPercentage: 5,
    rating: 3.5,
    stock: 9000,
    brand: "big tits",
    category: "books",
  }),
  new Product({
    thumbnail: "../images/cereal/1675756691483.png",
    title: "mucho",
    description: "gnarly!!",
    price: 85,
    quantity: 885,
    discountPercentage: 5,
    rating: 3.5,
    stock: 9000,
    brand: "big tits",
    category: "books",
  }),
  new Product({
    thumbnail: "../images/cereal/1675756734248.png",
    title: "bullshit",
    description: "stuff!!",
    price: 7835,
    quantity: 885,
    discountPercentage: 5,
    rating: 3.5,
    stock: 9000,
    brand: "big tits",
    category: "books",
  }),
  new Product({
    thumbnail: "../images/cereal/1675756768351.png",
    title: "hooga",
    description: "the best shit ever",
    price: 78,
    quantity: 885,
    discountPercentage: 5,
    rating: 3.5,
    stock: 9000,
    brand: "big tits",
    category: "books",
  }),
];

let doneWithSeeding = 0;
products.forEach((prod) => {
  doneWithSeeding++;
  prod.save();

  if (doneWithSeeding === products.length) {
    setTimeout(() => mongoose.disconnect(), 1000);
  }
});
