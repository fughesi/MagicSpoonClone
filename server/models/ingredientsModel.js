import mongoose, { Schema } from "mongoose";

const ingredientsSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3 },
  description: { type: String, required: true },
  calories: { type: Number },
  macros: { type: Object },
  minerals: { type: Object },
  allergens: { type: Array },
});

const Ingredients = mongoose.model("Ingredients", ingredientsSchema);

export default Ingredients;
