import asyncHandler from "express-async-handler";
import Products from "../models/productModel.js";
import { productValidation } from "../middleware/validationHandler.js";

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

//DESC - add new products
//ROUTE - POST /products
//ACCESS - private
const addProduct = asyncHandler(async (req, res) => {
  const { sku, title, description, quantity, price, discountPercentage, rating, brand, category, ingredients, stats } =
    productValidation.validateAsync(req.body, { abortEarly: false });

  const allProducts = await Products.find();

  try {
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).send(`Fetch request failed with error message ${error?.message}`);
    console.log(error?.message);
  }
});

export { getAllProducts, addProduct };
