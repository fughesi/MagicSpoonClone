import express from "express";
import jwt from "jsonwebtoken";
import Joi from "joi";
import Users from "../models/userModel.js";

import fs from "fs";
import { URL } from "url";

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const allUsers = await Users.find().lean();

    if (!allUsers.length) res.status(400).json({ message: "no users found" });

    try {
      res.json(allUsers);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: `failed to fetch` });
    }
  })
  .post((req, res) => {
    res.json({ message: "post created..." });
  });

router.route("/login/:id").get(async (req, res) => {
  res.json({ message: "this is awesome", id: req.params.id });
});

// router.route("/:image").get((req, res) => {
//   const imgPath = `${new URL("..", import.meta.url).pathname}images/cereal/${req.params.image}`;

//   fs.readFile(imgPath, (err, content) => {
//     if (err) {
//       res.writeHead(404, { "Content-type": "text/html" });
//       res.end("<h1>No such image in server</h1>");
//     } else {
//       res.writeHead(200, { "Content-type": "image/apng" });
//       res.end(content);
//     }
//   });
// });

export default router;
