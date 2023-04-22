import asyncHandler from "express-async-handler";
import Cart from "../models/cartModel.js";
import Users from "../models/userModel.js";

//============================================================

//DESC - add item(s) to cart or increment quantity
//ROUTE - PATCH /api/cart/increase/:id
//ACCESS - private
const addCartItems = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const { cartProduct } = req.body;

  const addToCart = await Users.findOne({ _id: userId.toString() }).exec();

  const indexedItem = addToCart.shoppingCart.findIndex((i) => i._id == cartProduct);

  if (indexedItem >= 0) {
    addToCart.shoppingCart[indexedItem].quantity += 1;
  } else {
    addToCart.shoppingCart.push({ _id: cartProduct });
  }

  const result = await addToCart.save();

  if (result) {
    res.status(200).json(result);
  } else {
    console.log("error");
    res.status(400);
    throw new Error("Unable to update cart at this time");
  }
});

//============================================================

//DESC - delete item(s) to cart or decrement quantity
//ROUTE - PATCH /api/cart/decrease/:id
//ACCESS - private
const decrementCartItems = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const { cartProduct } = req.body;

  const decrementCart = await Users.findOne({ _id: userId.toString() }).exec();

  const indexedItem = decrementCart.shoppingCart.findIndex((i) => i._id == cartProduct);

  if (indexedItem >= 0 && decrementCart.shoppingCart[indexedItem].quantity > 1) {
    decrementCart.shoppingCart[indexedItem].quantity -= 1;
  } else {
    // await Users.findByIdAndUpdate({ _id: userId.toString() }, { $pull: { shoppingCart: { _id: cartProduct } } }).save();

    console.log("didn't decrease", decrementCart.shoppingCart[indexedItem], indexedItem);
  }

  const filePath = new URL("../images/cereal/1675756651067.png", import.meta.url).pathname;
  const result = await decrementCart.save();
  console.log(filePath);
  if (result) {
    // res.status(200).sendFile(filePath).json(result);
    // res.status(200).sendFile(filePath);
    res.status(200).json(result);
  } else {
    console.log("error");
    res.status(400);
    throw new Error("Unable to update cart at this time");
  }
});

//============================================================

//DESC - delete single item in cart
//ROUTE - PATCH /api/cart/delete/:id
//ACCESS - private
const deleteSingleItem = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  //   const deleteSingleItems = await Users.findOne({ _id: userId.toString() }).exec();

  //   deleteItems.shoppingCart = [];

  const result = await deleteSingleItems.save();

  if (result) {
    res.status(200).json(result);
  } else {
    console.log(error);
    res.status(400);
    throw new Error("Unable to update cart at this time");
  }
});

//============================================================

//DESC - delete all items in cart
//ROUTE - PATCH /api/cart/delete
//ACCESS - private
const deleteAllCartItems = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  const deleteItems = await Users.findOne({ _id: userId.toString() }).exec();

  deleteItems.shoppingCart = [];

  const result = await deleteItems.save();

  if (result) {
    res.status(200).json(result);
  } else {
    console.log(error);
    res.status(400);
    throw new Error("Unable to update cart at this time");
  }
});

//============================================================

export { addCartItems, decrementCartItems, deleteAllCartItems, deleteSingleItem };
