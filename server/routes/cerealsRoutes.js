import express from "express";
import multer from "multer";
import Joi from "joi";
import Cereals from "../models/cerealModel.js";

const path = new URL("..", import.meta.url).pathname;

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${path}images/cereal`);
  },
  filename: (req, file, cb) => {
    const ext = file?.originalname.split(".")[1];
    cb(null, `${Date.now().toString()}.${ext.toString()}`);
  },
});

const upload = multer({ storage: storage }).single("image");

router.route("/").get(async (req, res) => {
  const allCereals = await Cereals.find();

  try {
    res.status(200).send(allCereals);
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
  .post((req, res, next) => {
    upload(req, res, (err) => {
      if (err) {
        return console.log(err);
      } else {
        const schema = Joi.object({
          title: Joi.string().required().min(3).max(50),
          price: Joi.number().required(),
          image: Joi.binary().encoding("base64"),
        });

        const { error } = schema.validate(req.body);

        if (error) return res.status(400).send(error?.details[0]?.message);

        const cerealPost = new Cereals({
          title: String(req.body.title),
          price: Number(req.body.price),
          image: {
            data: req.file.filename,
            contentType: "image/png",
          },
        });
        cerealPost.save().catch((err) => console.log(err));
      }
      next();
    });
    res.status(200).redirect("/cereals/upload");
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
