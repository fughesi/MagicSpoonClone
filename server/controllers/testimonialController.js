import asyncHandler from "express-async-handler";
import Testimonials from "../models/testimonialModel.js";
import { testimonialValidation } from "../middleware/reqValidationHandler.js";

//DESC - find all testimonials
//ROUTE - GET /testimonials
//ACCESS - public
const getAllTestimonials = asyncHandler(async (req, res) => {
  const allTestimonials = await Testimonials.find();

  try {
    res.status(200).json(allTestimonials);
  } catch (error) {
    res.status(500).send(`Fetch request failed with error message ${error?.message}`);
    console.log(error?.message);
  }
});

//DESC - post a new testimonial
//ROUTE - POST /testimonials
//ACCESS - private
const addTestimonial = asyncHandler(async (req, res) => {
  const { error, title, statement, company, rating } = testimonialValidation.validate(req.body);

  if (error) return res.status(400).send(error?.details[0]?.message);

  const testimonialPost = new Testimonials({
    title,
    statement,
    company,
    rating,
  });

  try {
    testimonialPost = await testimonialPost.save();

    res.status(201).json({ message: "testimonial added successfully" });
  } catch (error) {
    console.log(`Error while saving testimonial post: ${error}`);
    res.status(500).send(error?.message);
  }
});

//DESC - get a specific testimonial
//ROUTE - GET /current/:id
//ACCESS - private
const getSingleTestimonial = asyncHandler(async (req, res) => {
  const singleTestimonial = await Testimonials.findOne({ _id: req.params.id });

  try {
    res.status(200).json(singleTestimonial);
  } catch (error) {
    res.status(500).json({ message: `Fetch request failed with error message ${error?.message}` });
    console.log(error?.message);
  }
});

//DESC - get a specific testimonial
//ROUTE - PUT /current/:id
//ACCESS - private
const updateTestimonial = asyncHandler(async (req, res) => {
  const foundTestimonial = await Testimonials.findById(req.params.id);

  if (!foundTestimonial) {
    res.status(404);
    throw new Error("Testimonial not found in database");
  }

  if (foundTestimonial.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("user is not authorized to update this testimonial");
  }

  const updates = testimonialValidation.validate(req.body);

  if (foundTestimonial) {
    try {
      await Testimonials.updateOne({ _id: foundTestimonial.id }, { $set: updates });
      console.log(`Testimonial titled "${foundTestimonial?.title}" was successfully updated`);
      res.status(200).json(updates);
    } catch (error) {
      res.status(500).send(`Unable to update testimonial; error message: ${error}`);
    }
  } else {
    res.status(404).send("Testimonial not found");
  }
});

//DESC - delete a testimonial
//ROUTE - DELETE /current/:id
//ACCESS - private
const deleteTestimonial = asyncHandler(async (req, res) => {
  const itemToDelete = await Testimonials.findById(req.params.id);

  if (!itemToDelete) {
    res.status(404);
    throw new Error("Testimonial not found in database");
  }

  if (itemToDelete.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("user is not authorized to delete this testimonial");
  }

  try {
    await Testimonials.deleteOne(itemToDelete);

    res.status(200).json({ message: `Testimonial titled "${itemToDelete?.title}" was successfully deleted` });
  } catch (error) {
    res.status(500).json({ message: `Unable to delete testimonial; error message: ${error}` });
  }
});

export { getAllTestimonials, addTestimonial, getSingleTestimonial, updateTestimonial, deleteTestimonial };
