import { nanoid } from "nanoid";
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
    id: nanoid(),
    user_id: "643860de4aaa953ca573a4d0",
    title: "yum yum",
    statement:
      "I eat this shit like it's going out of style or like it's the MF cure for cancer.  The world is my toilet",
    company: "chinese shit company",
    rating: 3.6,
  }),
  new Testimonials({
    id: nanoid(),
    user_id: "643860de4aaa953ca573a4d0",
    title: "the best shit ever",
    statement: "this product is the most amazing stuff I ever put in my mouth",
    company: "Chinese shit company",
    rating: 4.25,
  }),
  new Testimonials({
    id: nanoid(),
    user_id: "643860de4aaa953ca573a4d0",
    title: "meh",
    statement: "I've had better to be honest",
    company: "Babycakes LLC",
    rating: 2.6,
  }),
  new Testimonials({
    id: nanoid(),
    user_id: "643860de4aaa953ca573a4d0",
    title: "schlong",
    statement: 'This cereal made my dick 1.5" bigger',
    company: "chinese shit company",
    rating: 4.6,
  }),
  new Testimonials({
    id: nanoid(),
    user_id: "643860de4aaa953ca573a4d0",
    title: "the best shit ever",
    statement: "this is the best shit I ever tasted in my life",
    company: "pornHub",
    rating: 5.0,
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
