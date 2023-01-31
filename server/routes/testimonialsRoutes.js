import express from "express";
import Joi from "joi";
import Testimonials from "../models/testimonialModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  let allTestimonials = await Testimonials.find();

  res.send(allTestimonials);
});

router.post("/", async (req, res) => {
  const schema = Joi.object({
    title: Joi.string().required().min(3).max(45),
    statement: Joi.string().required().min(5),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error?.details[0]?.message);

  let testimonialPost = new Testimonials({
    title: req.body.title,
    statement: req.body.statement,
  });

  try {
    testimonialPost = await testimonialPost.save();

    res.status(201).send("testimonial added successfully");
  } catch (error) {
    console.log(`Error while saving testimonial post: ${error}`);
    res.send(error?.message);
  }
});

export default router;

// res.format({
//   "application/json": () => send({ status: 201, message: "testimonial added successfully" }),
// });
