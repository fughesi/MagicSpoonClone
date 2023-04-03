import asyncHandler from "express-async-handler";
import Cart from "../models/cartModel.js";
import { Users } from "../models/userModel.js";
import { cartValidation } from "../validations/validationHandler.js";

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

//DESC - add item(s) to cart or increment quantity
//ROUTE - POST /user/:id
//ACCESS - private
const addItemToCart = asyncHandler(async (req, res) => {
  const { error } = cartValidation.validate(req.body, { abortEarly: false });

  if (error) return res.status(400).json({ message: error.details[0]?.message });

  // const { _id: userId} = req.params;
  // const { _id: prodId} = req.body;

  const findShopper = await Users.findOne({ _id: userId });

  const findProduct = await Products.findOne({ _id: prodId });

  if (!findShopper) res.status(400).json({ message: "please log in to add items to cart" });

  try {
    if (findShopper) {
      const indexedItem = findShopper.shoppingCart.findIndex((i) => i._id === findProduct._id);
      if (findShopper.shoppingCart[indexedItem]) {
        await findShopper.updateOne({ shoppingCart: (quantity += 1) });
        res.status(200).json({ message: `${title} quantity successfully updated` });
      } else {
        await findShopper.updateOne(shoppingCart.push(findProduct));
        res.status(200).json({ message: `${title}  successfully added to cart` });
      }
    }
  } catch (err) {
    console.log("error adding item to cart", error), res.status(500).json({ message: "unable to save item to cart!" });
  }
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

//DESC - decrement item in cart
//ROUTE - PUT /user/:id
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

export { allCartItems, addItemToCart, singleCartItem, decrementItemInCart };

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

//     deleteItemFromCart: (state, { payload }) => {
//       const deletedItems = state.items?.filter((i) => {
//         return i.id !== payload.id;
//       });

//       state.items = deletedItems;

//
//     },
//     clearCart: (state, { payload }) => {
//       state.items = [];

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
