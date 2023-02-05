import express from "express";
import multer from "multer";
import Joi from "joi";
import Cereals from "../models/cerealModel.js";

import { __dirname, __filename } from "../server.js";

const tit = new URL(import.meta.url);
// const __dirname = new URL("..", import.meta.url);

console.log(tit);

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}images`);
  },
  filename: (req, file, cb) => {
    const ext = file?.originalname.split(".")[1];
    cb(null, `${Date.now().toString()}.${ext.toString()}`);
  },
});

const upload = multer({ storage: storage });

router.get("/upload", (req, res) => {
  res.sendFile(`${__dirname}views/upload.html`);
});

router.get("/", (req, res) => {
  res.send("howdy");
});

router.post("/upload", upload.single("image"), (req, res) => {
  // upload(req, res, (err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  // const Cereals = new Cereals({
  //   title: req.body.title,
  //   price: req.body.price,
  //   image: {
  //     data: req.file.filename,
  //     contentType: "image/apng",
  //     contentType: "image/png",
  //   },
  // });
  // Cereals.save()
  //   .then(() => res.send("file successfully uploaded"))
  //   .catch((err) => console.log(err));

  // }
  // });

  // res.sendFile(
  //   `${__filename}images/1675607070135MS_PDP_VARIETY_FRUITY_BOWL_TRANSPARENT_947x960_8beb727b-5ef8-47c0-9416-3524f3f0934d_medium.png`
  // );
  res.send("file uploaded successfully");
});

export default router;
