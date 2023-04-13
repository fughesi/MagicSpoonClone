import asyncHandler from "express-async-handler";
import Cart from "../models/cartModel.js";
import Users from "../models/userModel.js";
import mongoose from "mongoose";

//============================================================

//DESC - add item(s) to cart or increment quantity
//ROUTE - POST /api/cart/:id
//ACCESS - private
const addCartItems = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const { cartProduct } = req.body;

  console.log(cartProduct, typeof userId);

  try {
    const addToCart = await Users.updateOne(
      { _id: userId.toString() },
      { $inc: { "shoppingCart.$[element].quantity": 106 } },
      { arrayFilters: [{ "element._id": cartProduct.toString() }] },
      (error) => {
        if (error) console.log(error);
      },
      { upsert: true }
    ).clone();

    console.log("worked like a charm");
    res.status(200).send(addToCart);
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error("Unable to update cart at this time");
  }
});

//============================================================

//  experimental below

//DESC - get all items in cart
//ROUTE - GET /api/cart
//ACCESS - public
const singleCartItem = asyncHandler(async (req, res) => {
  const cartItems = await Cart.find();

  try {
    res.status(200).json(cartItems);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: `Unable to get cart items: ${error}` });
  }
});

//============================================================
//DESC - get all items in cart
//ROUTE - GET api/cart
//ACCESS - public
const allCartItems = asyncHandler(async (req, res) => {
  const shopper = await Users.find({ email: req.body.email });

  if (shopper.shoppingCart?.length) {
    const indexedItem = shopper.shoppingCart.findIndex((i) => i.id === req.id);

    if (state.items[indexedItem]) {
      state.items[indexedItem].quantity += 1;
    }
  }

  try {
    res.status(200).json(shopper);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Unable to get cart items: ${error}` });
  }
});

//============================================================

//DESC - decrement item in cart
//ROUTE - PUT /api/cart/:id
//ACCESS - private
const decrementItemInCart = asyncHandler(async (req, res) => {
  const cartItems = await Cart.find();

  try {
    res.status(200).json(cartItems);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Unable to get cart items: ${error}` });
  }
});

export { addCartItems, singleCartItem, decrementItemInCart, allCartItems };
