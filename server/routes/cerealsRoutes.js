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

///// ----- GET
router.get("/", async (req, res) => {
  const allCereals = await Cereals.find();

  try {
    res.status(200).send(allCereals);
    // res.status(200).send(allCereals, Buffer.from(allCereals.image).toString("base64"));
  } catch (error) {
    console.log(`failed to fetch cereals, ${error?.message}`);
    res.status(500).send(`failed to fetch cereals, ${error?.message}`);
  }
});

router.get("/upload", (req, res) => {
  res.sendFile(`${path}views/upload.html`);
});

///////------- POST
router.post("/upload", (req, res, next) => {
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
      cerealPost
        .save()
        .then(() => res.send("file saved to DB"))
        .catch((err) => console.log(err));
    }
    next();
  });

  res.status(200).send("file uploaded successfully");
});

export default router;
