import express from "express";
import Joi from "joi";
import Cart from "../models/cartModel.js";

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const allCartItems = await Cart.find();

    try {
      res.send(allCartItems);
    } catch (error) {
      console.log(error);
      res.status(500).send(`Unable to get cart items: ${error}`);
    }
  })
  .post(async (req, res) => {
    const schema = Joi.object({
      title: Joi.string().required().min(3),
      quantity: Joi.number().required(),
    });

    const { error } = schema.validate(req.body);

    if (error) return res.status(400).send(error?.details[0]?.message);

    const findItemInCart = await Cart.findOne({ _id: req.body?.id });

    if (findItemInCart) {
      findItemInCart.updateOne({ quantity: (quantity += 1) });
    }

    const addToCart = new Cart({
      title: req.body.title,
      quantity: req.body.quantity,
    });

    addToCart
      .save()
      .then(() => "item added to cart")
      .catch((error) => console.log(error));
  });

export default router;
