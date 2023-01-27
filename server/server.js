import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5005;

app.use("/", (req, res) => {
  res.send("howdy y'all");
});

app.listen();
