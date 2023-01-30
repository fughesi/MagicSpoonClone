import express from "express";
import dotenv from "dotenv";
//import { URL } from "url"; // in Browser, the URL in native accessible on window

const __filename = new URL("", import.meta.url).pathname;
const __dirname = new URL(".", import.meta.url).pathname;

dotenv.config();

const app = express();
const port = process.env.PORT || 5005;

app.use("/", express.static(__dirname + "static"));

app.use("/", (req, res) => {
  res.send("howdy y'all");
});

app.listen(port, () => console.log(`Server running on ${port}`));
