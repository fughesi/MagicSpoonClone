import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import cerealsRoutes from "./routes/cerealsRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import testimonialRoutes from "./routes/testimonialsRoutes.js";
import Post from "./models/postModel.js";

import { URL } from "url";

//export const __filename = new URL("..", import.meta.url).pathname; // use periods to go up in file/directory path
// export const __dirname = new URL(".", import.meta.url).pathname;

dotenv.config();

const app = express();
const db = process.env.DB;
const port = process.env.PORT || 5005;

app.use(express.static("static"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

////////////experimental to try uploading base64
// app.get("/image", (req, res) => {
//   try {
//     Post.find().then((data) => {
//       res.json(data);
//     });
//   } catch (error) {
//     res.status(408).json({ message: error.message });
//   }
// });
// app.post("/image/uploads", async (req, res) => {
//   const body = req.body;
//   console.log(body);
//   try {
//     const newImage = await Post.create(body);

//     newImage.save();
//     res.status(201).json({ message: "new image uploaded" });
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// });
///////////////////

app.get("/loginPage", (req, res) => {
  res.render("login", { title: "LOGIN system" });
});

// ROUTES LIST
app.use("/testimonials", testimonialRoutes);
app.use("/products", productRoutes);
app.use("/cereals", cerealsRoutes);
app.use("/cart", cartRoutes);
app.use("/users", userRoutes);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

mongoose
  .set("strictQuery", false)
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful"))
  .catch((error) => {
    console.log(`connection to DB failed: ${error?.message}`);
  });
