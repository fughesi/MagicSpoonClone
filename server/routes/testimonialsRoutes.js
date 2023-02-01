import express from "express";
import Joi from "joi";
import Testimonials from "../models/testimonialModel.js";

const router = express.Router();

///// ---- GET
router.get("/", async (req, res) => {
  const allTestimonials = await Testimonials.find();

  try {
    res.status(200).send(allTestimonials);
  } catch (error) {
    res.status(500).send(`Fetch request failed with error message ${error?.message}`);
    console.log(error?.message);
  }
});

router.get("/:id", async (req, res) => {
  const singleTestimonial = await Testimonials.findOne({ _id: req.params.id });

  try {
    res.status(200).send(singleTestimonial);
  } catch (error) {
    res.status(500).send(`Fetch request failed with error message ${error?.message}`);
    console.log(error?.message);
  }
});

////// ----- POST
router.post("/", async (req, res) => {
  const schema = Joi.object({
    title: Joi.string().required().min(3).max(45),
    statement: Joi.string().required().min(5),
    rating: Joi.number(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error?.details[0]?.message);

  let testimonialPost = new Testimonials({
    title: req.body.title,
    statement: req.body.statement,
    rating: req.body.rating,
  });

  try {
    testimonialPost = await testimonialPost.save();

    res.status(201).send("testimonial added successfully");
  } catch (error) {
    console.log(`Error while saving testimonial post: ${error}`);
    res.status(500).send(error?.message);
  }
});

////// ----- PATCH
router.patch("/:id", async (req, res) => {
  const updates = req.body;
  const updatedTestimonial = await Testimonials.findOne({ _id: req.params.id });

  if (updatedTestimonial) {
    try {
      await Testimonials.updateOne({ _id: updatedTestimonial.id }, { $set: updates });
      res.status(200).send(`Testimonial titled "${updatedTestimonial?.title}" was successfully updated`);
    } catch (error) {
      res.status(500).send(`Unable to update testimonial; error message: ${error}`);
    }
  } else {
    res.status(404).send("Testimonial not found");
  }
});

////// ------- DELETE
router.delete("/:id", async (req, res) => {
  const itemToDelete = await Testimonials.findOne({ _id: req.params.id });

  if (itemToDelete) {
    try {
      await Testimonials.deleteOne({ _id: itemToDelete._id });

      res.status(200).send(`Testimonial titled "${itemToDelete?.title}" was successfully deleted`);
    } catch (error) {
      res.status(500).send(`Unable to delete testimonial; error message: ${error}`);
    }
  } else {
    res.status(404).send("Testimonial not found");
  }
});

export default router;
