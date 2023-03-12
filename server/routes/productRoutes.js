import express from "express";
import Products from "../models/productModel.js";
import Joi from "joi";

const router = express.Router();

router.route("/").get(async (req, res) => {
  const getAllProducts = await Products.find();

  try {
    res.sendFile(getAllProducts.thumbnail);
    // res.json(getAllProducts);
  } catch (error) {
    console.log(`error getting products from database, ${error}`);
    res.status(404).json({ message: "no cart items found" });
  }
});

export default router;
