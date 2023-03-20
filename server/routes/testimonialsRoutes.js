import express from "express";
import {
  getAllTestimonials,
  addTestimonial,
  getSingleTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "../controllers/testimonialController.js";

const router = express.Router();

router.route("/").get(getAllTestimonials).post(addTestimonial);
router.route("/current/:id").get(getSingleTestimonial).put(updateTestimonial).delete(deleteTestimonial);

export default router;
