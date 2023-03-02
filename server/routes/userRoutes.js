import express from "express";
import Joi from "joi";
import Users from "../models/userModel.js";

import fs from "fs";
import { URL } from "url";

const router = express.Router();

router.route("/:image").get((req, res) => {
  //   const allUsers = await Users.find();

  const imgPath = `${new URL("..", import.meta.url).pathname}images/cereal/${req.params.image}`;

  fs.readFile(imgPath, (err, content) => {
    if (err) {
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("<h1>No such image in server</h1>");
    } else {
      res.writeHead(200, { "Content-type": "image/apng" });
      res.end(content);
    }
  });
});

export default router;
