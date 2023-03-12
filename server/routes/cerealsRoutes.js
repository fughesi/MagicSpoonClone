import express from "express";
import Joi from "joi";
import fs, { readFileSync } from "fs";
import Cereals from "../models/cerealModel.js";
import { uploadCereal } from "../middleware/imageLoader.js";
const path = new URL("..", import.meta.url).pathname;

const router = express.Router();

router.route("/").get(async (req, res) => {
  const allCereals = await Cereals.find();

  try {
    res.status(200).contentType("image/png").json(allCereals);
  } catch (error) {
    console.log(`failed to fetch cereals, ${error?.message}`);
    res.status(500).send(`failed to fetch cereals, ${error?.message}`);
  }
});

router
  .route("/upload")
  .get((req, res) => {
    res.render("upload", { upload: req.body.title });
  })
  .post(uploadCereal.single("image"), (req, res, next) => {
    const schema = Joi.object({
      title: Joi.string().required().min(3).max(50),
      price: Joi.number().required(),
      image: Joi.binary().encoding("base64"),
      // image: Joi.string(),
    });

    const { error } = schema.validate(req.body);

    if (error) return res.status(400).send(error?.details[0]?.message);

    const cerealPost = new Cereals({
      title: String(req.body.title),
      price: Number(req.body.price),
      // image: String(req.body.image),
      image: {
        data: req.file.filename,
        contentType: "image/png",
      },
    });

    console.log(req.body);

    cerealPost
      .save()
      .then(() => res.status(200).send("successfully uploaded"))
      .catch((err) => console.log(err));
  });

router
  .route("/:id")
  .get(async (req, res) => {
    const uniqueCereal = await Cereals.findOne({ _id: req.params.id });
    res.send(uniqueCereal);
  })
  .delete(async (req, res) => {
    const id = req.params.id;

    const deleteCereal = await Cereals.findById({ _id: id });
    if (deleteCereal) {
      try {
        await Cereals.deleteOne({ _id: deleteCereal._id });
        res.status(200).send(`cereal with id of ${id} has been deleted`);
      } catch (error) {
        console.log(error);
        res.status(500).send(`could not delete cereal with id of ${id} `);
      }
    } else {
      res.status(404).send(`Could not find cereal with id of ${id} `);
    }
  });

router.param("id", (req, res, next, id) => {
  console.log(`cereal id param = ${id}`);
  next();
});

export default router;
