import asyncHandler from "express-async-handler";
import Cart from "../models/cartModel.js";
import Users from "../models/userModel.js";

//============================================================

//DESC - add item(s) to cart or increment quantity
//ROUTE - POST /api/cart/:id
//ACCESS - private
const addCartItems = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const { cartProduct } = req.body;

  try {
    // const addToCart = await Users.updateOne(
    const addToCart = await Users.findByIdAndUpdate(
      // const addToCart = await Users.findOne(
      { _id: userId.toString() },
      { $inc: { "shoppingCart.$[element].quantity": 1066 } }, // mongoDB
      { arrayFilters: [{ "element.id": cartProduct.toString() }] } // mongoDB
      // (error) => {
      //   if (error) console.log(error);
      // }
      // { upsert: true }
    )
      .clone()
      .exec();

    // const indexedItem = addToCart.shoppingCart.findIndex((i) => i.id === `ObjectId(${cartProduct})`);
    addToCart.shoppingCart[0].quantity += 112;

    // if (indexedItem >= 0) {
    //   // state.items[indexedItem].quantity += 1;
    //   addToCart.shoppingCart[indexedItem].quantity += 12;
    // } else {
    //   // const updatedItems = { ...payload, quantity: 1 };
    //   // addToCart.shoppingCart.push(updatedItems);
    //   console.log("didn't work", addToCart.shoppingCart[0]), indexedItem);
    // }

    // console.log((addToCart.shoppingCart[0].quantity += 1));
    const result = await addToCart.save();

    res.status(200).send(result);
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
