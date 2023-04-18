import { nanoid } from "nanoid";
import asyncHandler from "express-async-handler";
import Testimonials from "../models/testimonialModel.js";

//============================================================

//DESC - find all testimonials
//ROUTE - GET /api/testimonials
//ACCESS - public
const getAllTestimonials = asyncHandler(async (req, res) => {
  const allTestimonials = await Testimonials.find();

  if (allTestimonials) {
    res.status(200).json(allTestimonials);
  } else {
    res.status(404);
    throw new Error("Fetch request failed with error message");
  }
});

//============================================================

//DESC - post a new testimonial
//ROUTE - POST /api/testimonials
//ACCESS - private
const addTestimonial = asyncHandler(async (req, res) => {
  const { title, statement, company, rating } = req.body; //need to attach user to testimonial

  const testimonial = new Testimonials({
    id: nanoid(),
    title,
    statement,
    company,
    rating,
  });

  const result = await testimonial.save();

  if (result) {
    // res.status(200).json(result);
    res.status(201).json({ message: "testimonial added successfully" });
  } else {
    res.status(400);
    throw new Error("unable to save testimonial at this time");
  }
});

//============================================================

//DESC - get a specific testimonial
//ROUTE - GET  /api/current/:id
//ACCESS - private
const getSingleTestimonial = asyncHandler(async (req, res) => {
  const singleTestimonial = await Testimonials.findOne({ _id: req.params.id });

  if (singleTestimonial) {
    res.status(200).json(singleTestimonial);
  } else {
    res.status(404);
    throw new Error("Fetch request failed");
  }
});

//============================================================

//DESC - get a specific testimonial
//ROUTE - PUT /api/current/:id
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

  const updates = req.body;

  if (foundTestimonial) {
    await Testimonials.updateOne({ _id: foundTestimonial.id }, { $set: updates });

    console.log(`Testimonial titled "${foundTestimonial?.title}" was successfully updated`);
    res.status(200).json(updates);
  } else {
    res.status(500);
    throw new Error("Unable to update testimonial at this time");
  }
});

//============================================================

//DESC - delete a testimonial
//ROUTE - DELETE /api/current/:id
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

  const deleteSuccess = await Testimonials.deleteOne(itemToDelete);

  if (deleteSuccess) {
    res.status(200).json({ message: `Testimonial titled "${itemToDelete?.title}" was successfully deleted` });
  } else {
    res.status(500);
    throw new Error("Unable to delete testimonial: server error");
  }
});

export { getAllTestimonials, addTestimonial, getSingleTestimonial, updateTestimonial, deleteTestimonial };
