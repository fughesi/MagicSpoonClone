import express from "express";
import { allCartItems, addItemToCart } from "../controllers/cartController.js";

const router = express.Router();

router.route("/").get(allCartItems);
router.route("/upload").post(addItemToCart);

export default router;

// router.route("/").get(async (req, res) => {
//   const allCartItems = await Cart.find();

//   try {
//     res.send(allCartItems);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(`Unable to get cart items: ${error}`);
//   }
// });

// router
//   .route("/upload")
//   .get((req, res) => {
//     res.render("cartInventory", { upload: req.body.title });
//   })
//   .post(async (req, res) => {
//     const schema = Joi.object({
//       title: Joi.string().required().min(3),
//       description: Joi.string(),
//       quantity: Joi.number().required(),
//       price: Joi.number().required(),
//       discountPercentage: Joi.number(),
//       rating: Joi.number(),
//       stock: Joi.number(),
//       brand: Joi.string().required(),
//       category: Joi.string().required(),
//     });

//     const { error } = schema.validate(req.body);

//     if (error) return res.status(400).send(error?.details[0]?.message);

//     const findItemInCart = await Cart.findOne({ _id: req.body?.id });

//     if (findItemInCart) {
//       findItemInCart.updateOne({ quantity: (quantity += 1) });
//     }

//     const addToCart = new Cart({
//       title: req.body.title,
//       quantity: req.body.quantity,
//       description: req.body.description,
//       price: req.body.price,
//       discountPercentage: req.body.discountPercentage,
//       rating: req.body.rating,
//       stock: req.body.stock,
//       brand: req.body.brand,
//       category: req.body.category,
//     });

//     addToCart
//       .save()
//       .then(() => "item added to cart")
//       .catch((error) => console.log(error));
//   });
