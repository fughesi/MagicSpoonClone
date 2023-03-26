import mongoose from "mongoose";
import Ingredients from "../models/ingredientsModel";

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

const ingredient = [
  new Ingredients({
    title: "Whey protein",
    description: "Whey protein concentrate and casein contain all 9 essential amino acids.",
    calories: 0,
    macros: {},
    minerals: {},
    allergens: ["dairy"],
  }),
  new Ingredients({
    title: "Monk Fruit",
    description:
      " A fruit native to Southeast Asia that was first cultivated by Buddhist monks in the 13th century and traditionally used in herbal medicine.",
    calories: 0,
    macros: {},
    minerals: {},
    allergens: [],
  }),
  new Ingredients({
    title: "Allulose",
    description:
      " A naturally-occurring sugar found in certain plants and fruits that adds only a trivial amount of sugar per serving. Allulose tastes just like regular sugar but has almost no calories and no impact on blood sugar.",
    calories: 4,
    macros: { carbs: 1 },
    minerals: {},
    allergens: [],
  }),
  new Ingredients({
    title: "Oil Blend",
    description:
      "Our high-oleic mix of sunflower oil and avocado oil is high in monounsaturated fats. These heart-healthy fats are also found in extra virgin olive oil.",
    calories: 9,
    macros: { fat: 1 },
    minerals: {},
    allergens: ["avocado"],
  }),
  new Ingredients({
    title: "Tapioca Starch",
    description:
      "Tapioca is made from cassava, a starchy root consumed by over half a billion people and naturally gluten-free.",
    calories: 0,
    macros: {},
    minerals: {},
    allergens: [],
  }),
  new Ingredients({
    title: "Chicory Root Inulin",
    description:
      "Inulin is a type of prebiotic fiber found in chicory root, a medicinal herb. Keeps your gut happy and lowers blood sugar levels.",
    calories: 0,
    macros: {},
    minerals: {},
    allergens: [],
  }),
  new Ingredients({
    title: "Natural Flavors",
    description: "We never use any artificial flavors, colors, or preservatives.",
    calories: 0,
    macros: {},
    minerals: {},
    allergens: [],
  }),
  new Ingredients({
    title: "Salt",
    description: "Because a pinch of salt makes everything better.",
    calories: 0,
    macros: {},
    minerals: {},
    allergens: [],
  }),
  new Ingredients({
    title: "Salt",
    description: "Because a pinch of salt makes everything better.",
    calories: 0,
    macros: {},
    minerals: {},
    allergens: [],
  }),
  new Ingredients({
    title: "Turmeric Extract",
    description: "Anti-inflammatory, high in antioxidants, and makes for a naturally bright yellow color.",
    calories: 0,
    macros: {},
    minerals: {},
    allergens: [],
  }),
  new Ingredients({
    title: "Spirulina Extract",
    description: "This tiny alga is packed with powerful nutrients and acts as a natural, green dye.",
    calories: 0,
    macros: {},
    minerals: {},
    allergens: [],
  }),
  new Ingredients({
    title: "Vegetable Juice",
    description: "used for coloring",
    calories: 0,
    macros: {},
    minerals: {},
    allergens: [],
  }),
];

let doneWithSeeding = 0;
ingredient.forEach((element) => {
  doneWithSeeding++;
  element.save();

  if (doneWithSeeding === ingredient.length) {
    setTimeout(() => mongoose.disconnect(), 1000);
  }
});
