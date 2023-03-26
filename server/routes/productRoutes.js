import express from "express";
import { getAllProducts } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
// router.get("/current/:id", singleUser);
// router.post("/login", userLogin);
// router.post("/registration", registerUser);

export default router;
