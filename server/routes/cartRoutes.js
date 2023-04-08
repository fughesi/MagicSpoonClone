import express from "express";
import { addCartItems, singleCartItem, decrementItemInCart, allCartItems } from "../controllers/cartController.js";

const router = express.Router();

router.route("/").post(allCartItems);
router.route("/upload");
router.route("/:id").post(addCartItems);

export default router;
