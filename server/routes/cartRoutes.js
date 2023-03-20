import express from "express";
import { allCartItems, addItemToCart } from "../controllers/cartController.js";

const router = express.Router();

router.route("/").get(allCartItems);
router.route("/upload").post(addItemToCart);

export default router;
