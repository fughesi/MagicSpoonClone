import express from "express";
import Joi from "joi";
import Products from "../models/productModel.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
  const getAllProducts = await Products.find();

  try {
    res.send(getAllProducts);
  } catch (error) {
    console.log(`error getting products from database, ${error}`);
    res.status(404).send("no cart items found");
  }
});

export default router;
