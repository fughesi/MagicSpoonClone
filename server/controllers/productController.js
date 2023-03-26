import asyncHandler from "express-async-handler";
import Products from "../models/productModel.js";
import { productValidation } from "../middleware/reqValidationHandler.js";

//DESC - find all products
//ROUTE - GET /products
//ACCESS - public
const getAllProducts = asyncHandler(async (req, res) => {
  const allProducts = await Products.find();

  try {
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).send(`Fetch request failed with error message ${error?.message}`);
    console.log(error?.message);
  }
});

export { getAllProducts };
