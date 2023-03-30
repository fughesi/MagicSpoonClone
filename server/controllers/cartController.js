import asyncHandler from "express-async-handler";
import Cart from "../models/cartModel.js";
import { cartValidation } from "../middleware/validationHandler.js";

//DESC - get all items in cart
//ROUTE - GET /cart
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

//DESC - add item(s) to cart
//ROUTE - POST /cart
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
  // else {
  //   Cart.save({ ...req.body, quantity: 1 })
  //     .then()
  //     .catch((err) => {
  //       console.log("error saving cart item", err);
  //       res.status(500).json({ message: "unable to save item to cart!" });
  //     });
  // }

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
    .catch(
      (error) => console.log("error adding item to cart", error),
      res.status(500).json({ message: "unable to save item to cart!" })
    );

  res.status(201).json({ message: `${title} successfully added to cart!` });
});

//DESC - get all items in cart
//ROUTE - GET /cart
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

//DESC - get all items in cart
//ROUTE - GET /cart
//ACCESS - public
const decrementItemFromCart = asyncHandler(async (req, res) => {
  const cartItems = await Cart.find();

  try {
    res.status(200).json(cartItems);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Unable to get cart items: ${error}` });
  }
});

export { allCartItems, addItemToCart, singleCartItem, decrementItemFromCart };

//     decrementItemFromCart: (state, { payload }) => {
//       const indexedItem = state.items?.findIndex((i) => i.id === payload.id);

//       const indexed = state.items[indexedItem];

//       if (indexed?.quantity > 1) {
//         indexed.quantity -= 1;
//       } else {
//         const deletedItems = state.items?.filter((i) => {
//           return i.id !== payload.id;
//         });

//         state.items = deletedItems;
//       }

//       localStorage.removeItem("cartItems");

//       localStorage.setItem("cartItems", JSON.stringify(state.items));
//     },
//     incrementItemQuantity: (state, { payload }) => {
//       const indexedItem = state.items.findIndex((i) => i.id === payload.id);

//       if (state.items[indexedItem]) {
//         state.items[indexedItem].quantity += 1;
//       }

//       localStorage.removeItem("cartItems");

//       localStorage.setItem("cartItems", JSON.stringify(state.items));
//     },
//     deleteItemFromCart: (state, { payload }) => {
//       const deletedItems = state.items?.filter((i) => {
//         return i.id !== payload.id;
//       });

//       state.items = deletedItems;

//       localStorage.removeItem("cartItems");

//       localStorage.setItem("cartItems", JSON.stringify(state.items));
//     },
//     clearCart: (state, { payload }) => {
//       state.items = [];

//       localStorage.removeItem("cartItems");
//     },
//     getTotals: (state, { payload }) => {
//       const { totalSum, cartQuantity } = state.items?.reduce(
//         (total, current) => {
//           const { price, quantity } = current;
//           let multiply = price * quantity;

//           total.totalSum += multiply;
//           total.cartQuantity += quantity;
//           return total;
//         },
//         {
//           totalSum: 0,
//           cartQuantity: 0,
//         }
//       );

//       state.totalCartAmount = totalSum;
//       state.totalCartQuantity = cartQuantity;
//     },
//   },
// });
