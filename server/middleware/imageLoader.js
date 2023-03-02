import multer from "multer";
const path = new URL("..", import.meta.url).pathname;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${path}images/cereal`);
  },
  filename: (req, file, cb) => {
    const ext = file?.originalname.split(".").at(-1);
    cb(null, `${req.body?.title.toString()}.${Date.now().toString().substr(6)}.${ext.toString()}`);
  },
});

export const uploadCereal = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      callback(null, true);
    } else {
      console.log("only jpg/jpeg and png supported");
      callback(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
});

// append "uploadCereal" with either .single("image") or .array("images", <count>)
