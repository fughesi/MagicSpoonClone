import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = process.env.DB;

export default mongoose
  .set("strictQuery", false)
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful"))
  .catch((error) => {
    console.log(`connection to DB failed: ${error?.message}`);
  });
