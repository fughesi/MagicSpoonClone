import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.send("howdy y'all");
});

app.listen();
