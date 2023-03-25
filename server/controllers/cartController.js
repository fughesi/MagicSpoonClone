import asyncHandler from "express-async-handler";
import Cart from "../models/cartModel.js";
import { cartValidation } from "../middleware/reqValidationHandler.js";

//DESC - get all items in cart
//ROUTE - GET /cart
//ACCESS - public
const allCartItems = asyncHandler(async (req, res) => {
  const cartItems = await Cart.find();

  try {
    res.send(cartItems);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Unable to get cart items: ${error}` });
  }
});

//DESC - add item(s) to cart
//ROUTE - POST /cart/upload
//ACCESS - private
const addItemToCart = asyncHandler(async (req, res) => {
  const { error, title, quantity, description, price, discountPercentage, rating, stock, brand, category } =
    cartValidation.validateAsync(req.body, { abortEarly: false });

  if (error) return res.status(400).json({ message: error.details[0]?.message });

  const findItemInCart = await Cart.findOne({ _id: req.params.id });

  if (findItemInCart) {
    findItemInCart.updateOne({ quantity: (quantity += 1) });
    res.status(200).json({ message: `${title} quantity successfully updated` });
  }

  const addToCart = new Cart({
    title,
    quantity,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
  });

  addToCart
    .save()
    .then(() => "item added to cart")
    .catch((error) => console.log(error));

  res.status(201).json({ message: `${title} successfully added to cart!` });
});

export { allCartItems, addItemToCart };
