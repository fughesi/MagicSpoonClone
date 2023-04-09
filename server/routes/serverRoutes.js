import express from "express";
import { loginPage, registerPage, uploadPage, indexPage, cartInventoryPage } from "../controllers/serverController.js";

import { Users } from "../models/userModel.js";
const router = express.Router();

router.get("/index", indexPage);
router.get("/login", loginPage);
router.get("/upload", uploadPage);
router.get("/register", registerPage);
router.get("/cartInventory", cartInventoryPage);

router.patch("/shopper/:id", async (req, res) => {
  console.log(req.body);
  const shopper = await Users.find({ _id: req.params.id });
  console.log(shopper);
  // const shopper = await Users.Query({ "shoppingCart.id": req.body.shoppingCart.id });
  // if (shopper.shoppingCart?.length) {
  //   const indexedItem = shopper.shoppingCart.findIndex((i) => i.id === req.id);

  //   if (state.items[indexedItem]) {
  //     state.items[indexedItem].quantity += 1;
  //   }
  // }

  //   shopper.shoppingCart.findIndex((i) => i.id === req.body.shoppingCart.id);

  try {
    // res.status(200).json(shopper);
    res.status(200).send(shopper);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Unable to get cart items: ${error}` });
  }
});

export default router;
