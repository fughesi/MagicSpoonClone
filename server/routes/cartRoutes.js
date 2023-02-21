import express from "express";
import Joi from "joi";
import Cart from "../models/cartModel.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
  const allCartItems = await Cart.find();

  try {
    res.send(allCartItems);
  } catch (error) {
    console.log(error);
    res.status(500).send(`Unable to get cart items: ${error}`);
  }
});
