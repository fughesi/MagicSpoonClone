if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/dbConnection.js";
import errorHandler from "./middleware/errorMiddleware.js";

import cartRoutes from "./routes/cartRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import serverRoutes from "./routes/serverRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import testimonialRoutes from "./routes/testimonialsRoutes.js";

connectDB;
const app = express();
const port = process.env.PORT || 5005;

app.use(express.static("static"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ROUTES LIST
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/", serverRoutes); // .ejs files
app.use((req, res) => {
  res.status(404).render("content", { title: "404" });
});
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
