if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import passport from "passport";
import flash from "express-flash";
import session from "express-session";

import initializePassport from "./passportConfig.js";

import cerealsRoutes from "./routes/cerealsRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import testimonialRoutes from "./routes/testimonialsRoutes.js";
import Post from "./models/postModel.js";

initializePassport(passport, (email) => {
  return users.find((user) => user.email === email);
});

const app = express();
const db = process.env.DB;
const port = process.env.PORT || 5005;

app.use(express.static("static"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

/////////////////////
// const users = [];

// app.get("/loginPage", (req, res) => {
//   console.log(req.headers);
//   res.render("login", { title: "LOGIN system" });
// });

// app.get("/registerPage", (req, res) => {
//   res.render("register", { title: "registration" });
// });

// app.post("/registerPage", async (req, res) => {
//   const { username, email, password } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     users.push({
//       id: Date.now().toString(),
//       username,
//       email,
//       password: hashedPassword,
//     });
//     res.redirect("/loginPage");
//   } catch (error) {
//     console.log(error);
//     res.redirect("/registrationPage");
//   }
//   res.send(users);
//   console.log(users);
// });
/////////////////////

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
