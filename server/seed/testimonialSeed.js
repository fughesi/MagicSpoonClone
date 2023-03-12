import mongoose from "mongoose";
import Testimonials from "../models/testimonialModel.js";

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

const testimonial = [
  new Testimonials({
    title: "the best shit ever",
    statement: "this product is the most amazing stuff I ever put in my mouth",
    company: "chinese shit company",
    rating: 3.6,
  }),
  new Testimonials({
    title: "the best shit ever",
    statement: "this product is the most amazing stuff I ever put in my mouth",
    company: "chinese shit company",
    rating: 3.6,
  }),
  new Testimonials({
    title: "the best shit ever",
    statement: "this product is the most amazing stuff I ever put in my mouth",
    company: "chinese shit company",
    rating: 3.6,
  }),
  new Testimonials({
    title: "the best shit ever",
    statement: "this product is the most amazing stuff I ever put in my mouth",
    company: "chinese shit company",
    rating: 3.6,
  }),
  new Testimonials({
    title: "the best shit ever",
    statement: "this product is the most amazing stuff I ever put in my mouth",
    company: "chinese shit company",
    rating: 3.6,
  }),
];

let doneWithSeeding = 0;
testimonial.forEach((attest) => {
  doneWithSeeding++;
  attest.save();

  if (doneWithSeeding === testimonial.length) {
    setTimeout(() => mongoose.disconnect(), 1000);
  }
});
