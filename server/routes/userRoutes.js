import express from "express";
import { getAllUsers, registerUser, userLogin, singleUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/current/:id", singleUser);
router.post("/login", userLogin);
router.post("/registration", registerUser);

export default router;
