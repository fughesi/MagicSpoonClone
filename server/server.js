if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import flash from "express-flash";
import session from "express-session";

import initializePassport from "./passportConfig.js";
import connectDB from "./config/dbConnection.js";

import cerealsRoutes from "./routes/cerealsRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import testimonialRoutes from "./routes/testimonialsRoutes.js";

initializePassport(passport, (email) => {
  return users.find((user) => user.email === email);
});

connectDB;
const app = express();
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

// ROUTES LIST
app.use("/testimonials", testimonialRoutes);
app.use("/cereals", cerealsRoutes);
app.use("/cart", cartRoutes);
app.use("/users", userRoutes);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
