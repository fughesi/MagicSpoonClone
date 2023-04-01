import Products from "../models/productModel.js";
import asyncHandler from "express-async-handler";

//DESC - find all products
//ROUTE - GET /products
//ACCESS - public
const getAllProducts = asyncHandler(async (req, res) => {
  const allProducts = await Products.find();

  if (allProducts) {
    res.status(200).json(allProducts);
  } else {
    res.status(404);
    throw new Error("Fetch request failed or products not found");
  }
});

//DESC - add new product
//ROUTE - POST /products
//ACCESS - private
const addProduct = asyncHandler(async (req, res) => {
  const { sku, title, description, stock, price, discountPercentage, rating, brand, category, ingredients, stats } =
    req.body;

  const uniqueProduct = await Products.find({ title });

  if (uniqueProduct) {
    res.status(400);
    throw new Error("this product already exists in the database");
  }

  const product = new Products({
    sku,
    title,
    description,
    stock,
    price,
    discountPercentage,
    rating,
    brand,
    category,
    ingredients,
    stats,
  });

  product.save((error) => {
    if (error) {
      res.status(400);
      throw new Error("unable to save product at this time");
    } else {
      res.status(201).json({ message: `${title} saved successfully to DB` });
      console.log(`${product.title} created successfully!`);
    }
  });
});

export { getAllProducts, addProduct };
