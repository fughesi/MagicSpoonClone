import express from "express";
import {
  addCartItems,
  decrementCartItems,
  deleteAllCartItems,
  deleteSingleItem,
} from "../controllers/cartController.js";

const router = express.Router();

router.route("/increase/:id").patch(addCartItems);
router.route("/decrease/:id").patch(decrementCartItems);
router.route("/delete").patch(deleteAllCartItems);
router.route("/delete/:id").patch(deleteSingleItem);

export default router;
