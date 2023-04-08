import asyncHandler from "express-async-handler";
import Cart from "../models/cartModel.js";
import { Users } from "../models/userModel.js";

//============================================================

//DESC - get all items in cart
//ROUTE - GET api/cart
//ACCESS - public
const allCartItems = asyncHandler(async (req, res) => {
  const cartItems = await Cart.find();

  try {
    res.status(200).json(cartItems);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Unable to get cart items: ${error}` });
  }
});

//============================================================

//DESC - add item(s) to cart or increment quantity
//ROUTE - POST /api/cart/:id
//ACCESS - private
const addCartItems = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  const findShopper = await Users.findOne({ _id: userId });

  if (!findShopper) res.status(400).json({ message: "Must be logged in to add to cart" });

  try {
    const addToCart = await Users.updateOne(
      { _id: userId },
      // { $inc: { shoppingCart: { quantity: 10 } } }
      { $push: { shoppingCart: { $each: [{ id: "64200335c6bfea9f15e3395c", quantity: 100 }] } } }
    );
    res.status(200).json(addToCart);
  } catch (error) {
    console.log(error);
    // res.send("error");
    res.status(400);
    throw new Error("whack");
  }
});

//============================================================

//DESC - get all items in cart
//ROUTE - GET /api/cart
//ACCESS - public
const singleCartItem = asyncHandler(async (req, res) => {
  const cartItems = await Cart.find();

  try {
    res.status(200).json(cartItems);
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
