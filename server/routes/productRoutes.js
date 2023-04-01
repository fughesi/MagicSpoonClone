import express from "express";
import validation from "../middleware/validateInput.js";
import { productValidation } from "../validations/validationHandler.js";
import { getAllProducts, addProduct } from "../controllers/productController.js";

const router = express.Router();

//products
router.get("/", getAllProducts);
router.post("/", validation(productValidation), addProduct);

export default router;
