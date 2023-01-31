import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import testimonialRoutes from "./routes/testimonialsRoutes.js";
//import { URL } from "url"; // in Browser, the URL in native accessible on window

const __filename = new URL("", import.meta.url).pathname;
const __dirname = new URL(".", import.meta.url).pathname;

dotenv.config();

const app = express();
const db = process.env.DB;
const port = process.env.PORT || 5005;

app.use("/", express.static(__dirname + "static"));
app.use(express.json());
app.use(cors());

// ROUTES LIST
app.use("/testimonials", testimonialRoutes);

app.listen(port, () => console.log(`Server running on ${port}`));

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
