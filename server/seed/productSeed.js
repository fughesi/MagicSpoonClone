import mongoose from "mongoose";
import Product from "../models/productModel.js";

mongoose
  .set("strictQuery", false)
  .connect("mongodb://localhost:27017/MagicSpoonClone", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful"))
  .catch((error) => {
    console.log(`connection to DB failed: ${error?.message}`);
  });

const products = [
  new Product({
    sku: "543bs4et",
    title: "Fruity",
    description:
      "A fruity cereal that isn’t loopy. We’ve reimagined your favorite fruit-forward childhood cereal with 4g net carbs, 13g complete protein, 150 calories, and no artificial ingredients.",
    quantity: 55,
    price: 9.99,
    discountPercentage: 0,
    rating: 4,
    brand: "Magic Spoon",
    category: "cereal",
    ingredients: [
      {
        name: "Milk Protein Blend",
        description: "Whey protein concentrate and casein contain all 9 essential amino acids.",
      },
      {
        name: "Sweetener Blend",
        description:
          "Monk Fruit - A fruit native to Southeast Asia that was first cultivated by Buddhist monks in the 13th century and traditionally used in herbal medicine.        Allulose - A naturally-occurring sugar found in certain plants and fruits that adds only a trivial amount of sugar per serving. Allulose tastes just like regular sugar but has almost no calories and no impact on blood sugar.",
      },
      {
        name: "Oil Blend",
        description:
          "Our high-oleic mix of sunflower oil and avocado oil is high in monounsaturated fats. These heart-healthy fats are also found in extra virgin olive oil.",
      },
      {
        name: "Tapioca Starch",
        description:
          "Tapioca is made from cassava, a starchy root consumed by over half a billion people and naturally gluten-free.",
      },
      {
        name: "Chicory Root Inulin",
        description:
          "Inulin is a type of prebiotic fiber found in chicory root, a medicinal herb. Keeps your gut happy and lowers blood sugar levels.",
      },
      {
        name: "Natural Flavors",
        description: "We never use any artificial flavors, colors, or preservatives.",
      },
      {
        name: "Salt",
        description: "Because a pinch of salt makes everything better.",
      },
      {
        name: "Turmeric Extract",
        description: "Anti-inflammatory, high in antioxidants, and makes for a naturally bright yellow color.",
      },
      {
        name: "Spirulina Extract",
        description: "This tiny alga is packed with powerful nutrients and acts as a natural, green dye.",
      },
      {
        name: "Turmeric Extract",
        description: "Anti-inflammatory, high in antioxidants, and makes for a naturally bright yellow color.",
      },
      {
        name: "Vegetable Juice",
        description: "Used for color.",
      },
    ],
    stats: {
      protein: "13g",
      netCarbs: "4g",
      sugar: "0g",
      servingSize: "38g",
      grainFree: true,
      glutenFre: true,
    },
  }),
  new Product({
    sku: "93jd7632",
    title: "Cocoa",
    description:
      "Dark, rich, and made with real cocoa. We’ve reimagined your favorite chocolatey cereal with 4g net carbs, 13g complete protein, 140 calories, and no artificial ingredients.",
    quantity: 59,
    price: 9.99,
    discountPercentage: 0,
    rating: 3.25,
    brand: "Magic Spoon",
    category: "cereal",
    ingredients: [
      {
        name: "Milk Protein Blend",
        description: "Whey protein concentrate and casein contain all 9 essential amino acids.",
      },
      {
        name: "Sweetener Blend",
        description:
          "Monk Fruit - A fruit native to Southeast Asia that was first cultivated by Buddhist monks in the 13th century and traditionally used in herbal medicine.        Allulose - A naturally-occurring sugar found in certain plants and fruits that adds only a trivial amount of sugar per serving. Allulose tastes just like regular sugar but has almost no calories and no impact on blood sugar.",
      },
      {
        name: "Oil Blend",
        description:
          "Our high-oleic mix of sunflower oil and avocado oil is high in monounsaturated fats. These heart-healthy fats are also found in extra virgin olive oil.",
      },
      {
        name: "Tapioca Starch",
        description:
          "Tapioca is made from cassava, a starchy root consumed by over half a billion people and naturally gluten-free.",
      },
      {
        name: "Chicory Root Inulin",
        description:
          "Inulin is a type of prebiotic fiber found in chicory root, a medicinal herb. Keeps your gut happy and lowers blood sugar levels.",
      },
      {
        name: "Natural Flavors",
        description: "We never use any artificial flavors, colors, or preservatives.",
      },
      {
        name: "Salt",
        description: "Because a pinch of salt makes everything better.",
      },
      {
        name: "Cocoa Powder",
        description:
          "Cocoa only. Sourced from real cocoa beans. Cocoa can fight against oxidative stress to reduce inflammation. (Plus, it’s just delicious). ",
      },
    ],
    stats: {
      protein: "13g",
      netCarbs: "4g",
      sugar: "0g",
      servingSize: "37g",
      grainFree: true,
      glutenFre: true,
    },
  }),
  new Product({
    sku: "5wef225e",
    title: "Peanut Butter",
    description:
      "Crunchy, nutty, and perfectly sweet. We’ve reimagined your favorite peanut butter cereal with 4g net carbs, 14g complete protein, 170 calories, and no artificial ingredients.",
    quantity: 63,
    price: 9.99,
    discountPercentage: 0,
    rating: 4.2,
    brand: "Magic Spoon",
    category: "cereal",
    ingredients: [
      {
        name: "Milk Protein Blend",
        description: "Whey protein concentrate and casein contain all 9 essential amino acids.",
      },
      {
        name: "Sweetener Blend",
        description:
          "Monk Fruit - A fruit native to Southeast Asia that was first cultivated by Buddhist monks in the 13th century and traditionally used in herbal medicine.        Allulose - A naturally-occurring sugar found in certain plants and fruits that adds only a trivial amount of sugar per serving. Allulose tastes just like regular sugar but has almost no calories and no impact on blood sugar.",
      },
      {
        name: "Oil Blend",
        description:
          "Our high-oleic mix of sunflower oil and avocado oil is high in monounsaturated fats. These heart-healthy fats are also found in extra virgin olive oil.",
      },
      {
        name: "Tapioca Starch",
        description:
          "Tapioca is made from cassava, a starchy root consumed by over half a billion people and naturally gluten-free.",
      },
      {
        name: "Peanut Oil",
        description: "High in both monounsaturated fat and vitamin E.",
      },
      {
        name: "Peanut Flour",
        description: "Peanut Butter only. A powerful plant protein that serves as a gluten-free alternative.",
      },
      {
        name: "Salt",
        description: "Because a pinch of salt makes everything better.",
      },
      {
        name: "Chicory Root Inulin",
        description:
          "Inulin is a type of prebiotic fiber found in chicory root, a medicinal herb. Keeps your gut happy and lowers blood sugar levels.",
      },
      {
        name: "Peanut Extract",
        description: "Just to make things even more peanut butter-y.",
      },
      {
        name: "Natural Flavors",
        description: "We never use any artificial flavors, colors, or preservatives.",
      },
    ],
    stats: {
      protein: "14g",
      netCarbs: "4g",
      sugar: "0g",
      servingSize: "36g",
      grainFree: true,
      glutenFre: true,
    },
  }),
  new Product({
    sku: "35gf24et",
    title: "Frosted",
    description:
      "Sweet, subtle and smooth with hints of vanilla and marshmallow. We’ve reimagined your favorite simple cereal with 4g net carbs, 13g complete protein, 140 calories, and no artificial ingredients.",
    quantity: 55,
    price: 9.99,
    discountPercentage: 0,
    rating: 2.95,
    brand: "Magic Spoon",
    category: "cereal",
    ingredients: [
      {
        name: "Milk Protein Blend",
        description: "Whey protein concentrate and casein contain all 9 essential amino acids.",
      },
      {
        name: "Sweetener Blend",
        description:
          "Monk Fruit - A fruit native to Southeast Asia that was first cultivated by Buddhist monks in the 13th century and traditionally used in herbal medicine.        Allulose - A naturally-occurring sugar found in certain plants and fruits that adds only a trivial amount of sugar per serving. Allulose tastes just like regular sugar but has almost no calories and no impact on blood sugar.",
      },
      {
        name: "Oil Blend",
        description:
          "Our high-oleic mix of sunflower oil and avocado oil is high in monounsaturated fats. These heart-healthy fats are also found in extra virgin olive oil.",
      },
      {
        name: "Tapioca Starch",
        description:
          "Tapioca is made from cassava, a starchy root consumed by over half a billion people and naturally gluten-free.",
      },
      {
        name: "Chicory Root Inulin",
        description:
          "Inulin is a type of prebiotic fiber found in chicory root, a medicinal herb. Keeps your gut happy and lowers blood sugar levels.",
      },
      {
        name: "Natural Flavors",
        description: "We never use any artificial flavors, colors, or preservatives.",
      },
      {
        name: "Salt",
        description: "Because a pinch of salt makes everything better.",
      },
    ],
    stats: {
      protein: "13g",
      netCarbs: "4g",
      sugar: "0g",
      servingSize: "37g",
      grainFree: true,
      glutenFre: true,
    },
  }),
  new Product({
    sku: "f312dew7",
    title: "Maple Waffle",
    description:
      "We’ve reimagined your favorite waffle-flavored cereal with 4g net carbs, 12g complete protein, 150 calories, and no artificial ingredients. ",
    quantity: 55,
    price: 9.99,
    discountPercentage: 0,
    rating: 2.7,
    brand: "Magic Spoon",
    category: "cereal",
    ingredients: [
      {
        name: "Milk Protein Blend",
        description: "Whey protein concentrate and casein contain all 9 essential amino acids.",
      },
      {
        name: "Sweetener Blend",
        description:
          "Monk Fruit - A fruit native to Southeast Asia that was first cultivated by Buddhist monks in the 13th century and traditionally used in herbal medicine.        Allulose - A naturally-occurring sugar found in certain plants and fruits that adds only a trivial amount of sugar per serving. Allulose tastes just like regular sugar but has almost no calories and no impact on blood sugar.",
      },
      {
        name: "Oil Blend",
        description:
          "Our high-oleic mix of sunflower oil and avocado oil is high in monounsaturated fats. These heart-healthy fats are also found in extra virgin olive oil.",
      },
      {
        name: "Tapioca Starch",
        description:
          "Tapioca is made from cassava, a starchy root consumed by over half a billion people and naturally gluten-free.",
      },
      {
        name: "Chicory Root Inulin",
        description:
          "Inulin is a type of prebiotic fiber found in chicory root, a medicinal herb. Keeps your gut happy and lowers blood sugar levels.",
      },
      {
        name: "Natural Flavors",
        description: "We never use any artificial flavors, colors, or preservatives.",
      },
      {
        name: "Salt",
        description: "Because a pinch of salt makes everything better.",
      },
      {
        name: "Fruit and Vegetable Juice",
        description: "Used for color.",
      },
    ],
    stats: {
      protein: "12g",
      netCarbs: "4g",
      sugar: "0g",
      servingSize: "38g",
      grainFree: true,
      glutenFre: true,
    },
  }),
  new Product({
    sku: "65r5f5e1",
    title: "Cinnamon Roll",
    description:
      "Cinnamon cereal—hold the toast. We’ve reimagined your favorite cinnamon cereal with 4g net carbs, 12g complete protein, 140 calories, and no artificial ingredients.",
    quantity: 55,
    price: 9.99,
    discountPercentage: 0,
    rating: 4.6,
    brand: "Magic Spoon",
    category: "cereal",
    ingredients: [
      {
        name: "Milk Protein Blend",
        description: "Whey protein concentrate and casein contain all 9 essential amino acids.",
      },
      {
        name: "Sweetener Blend",
        description:
          "Monk Fruit - A fruit native to Southeast Asia that was first cultivated by Buddhist monks in the 13th century and traditionally used in herbal medicine.        Allulose - A naturally-occurring sugar found in certain plants and fruits that adds only a trivial amount of sugar per serving. Allulose tastes just like regular sugar but has almost no calories and no impact on blood sugar.",
      },
      {
        name: "Oil Blend",
        description:
          "Our high-oleic mix of sunflower oil and avocado oil is high in monounsaturated fats. These heart-healthy fats are also found in extra virgin olive oil.",
      },
      {
        name: "Tapioca Starch",
        description:
          "Tapioca is made from cassava, a starchy root consumed by over half a billion people and naturally gluten-free.",
      },
      {
        name: "Chicory Root Inulin",
        description:
          "Inulin is a type of prebiotic fiber found in chicory root, a medicinal herb. Keeps your gut happy and lowers blood sugar levels.",
      },
      {
        name: "Natural Flavors",
        description: "We never use any artificial flavors, colors, or preservatives.",
      },
      {
        name: "Salt",
        description: "Because a pinch of salt makes everything better.",
      },
      {
        name: "Cinnamon",
        description:
          "Cinnamon only. Long been used as both a spice and traditional medicine to boost metabolism and reduce inflammation.",
      },
    ],
    stats: {
      protein: "12g",
      netCarbs: "4g",
      sugar: "0g",
      servingSize: "37g",
      grainFree: true,
      glutenFre: true,
    },
  }),
  new Product({
    sku: "0r5v25dr",
    title: "Blueberry Muffin",
    description:
      "You won’t be able to resist the freshly baked and straight out of the oven taste of our Blueberry Muffin cereal! We’ve reimagined your favorite blueberry cereal with 5g net carbs, 13g complete protein, 150 calories, and nothing artificial.",
    quantity: 27,
    price: 9.99,
    discountPercentage: 0,
    rating: 2.5,
    brand: "Magic Spoon",
    category: "cereal",
    ingredients: [
      {
        name: "Milk Protein Blend",
        description: "Whey protein concentrate and casein contain all 9 essential amino acids.",
      },
      {
        name: "Sweetener Blend",
        description:
          "Monk Fruit - A fruit native to Southeast Asia that was first cultivated by Buddhist monks in the 13th century and traditionally used in herbal medicine.        Allulose - A naturally-occurring sugar found in certain plants and fruits that adds only a trivial amount of sugar per serving. Allulose tastes just like regular sugar but has almost no calories and no impact on blood sugar.",
      },
      {
        name: "Oil Blend",
        description:
          "Our high-oleic mix of sunflower oil and avocado oil is high in monounsaturated fats. These heart-healthy fats are also found in extra virgin olive oil.",
      },
      {
        name: "Tapioca Starch",
        description:
          "Tapioca is made from cassava, a starchy root consumed by over half a billion people and naturally gluten-free.",
      },
      {
        name: "Chicory Root Inulin",
        description:
          "Inulin is a type of prebiotic fiber found in chicory root, a medicinal herb. Keeps your gut happy and lowers blood sugar levels.",
      },
      {
        name: "Natural Flavors",
        description: "We never use any artificial flavors, colors, or preservatives.",
      },
      {
        name: "Vegetable Juice",
        description: "Used for color.",
      },
      {
        name: "Blueberry Powder",
        description: "Right from the antioxidant superfood, and makes for a deep blue color.",
      },
      {
        name: "Salt",
        description: "Because a pinch of salt makes everything better.",
      },
    ],
    stats: {
      protein: "13g",
      netCarbs: "5g",
      sugar: "0g",
      servingSize: "38g",
      grainFree: true,
      glutenFre: true,
    },
  }),
];

let doneWithSeeding = 0;
products.forEach((prod) => {
  doneWithSeeding++;
  prod.save();

  if (doneWithSeeding === products.length) {
    setTimeout(() => mongoose.disconnect(), 1000);
  }
});
