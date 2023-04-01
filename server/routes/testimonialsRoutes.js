import express from "express";
import {
  getAllTestimonials,
  addTestimonial,
  getSingleTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "../controllers/testimonialController.js";
import validation from "../middleware/validateInput.js";
import { testimonialValidation } from "../validations/validationHandler.js";

const router = express.Router();

//testimonials
router.route("/").get(getAllTestimonials).post(validation(testimonialValidation), addTestimonial);
router
  .route("/current/:id")
  .get(getSingleTestimonial)
  .put(validation(testimonialValidation), updateTestimonial)
  .delete(deleteTestimonial);

export default router;
