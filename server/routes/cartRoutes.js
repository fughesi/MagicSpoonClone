import express from "express";
import { allCartItems, addItemToCart } from "../controllers/cartController.js";

const router = express.Router();

router.route("/").get(allCartItems).post(addItemToCart);
router.route("/upload");

export default router;
