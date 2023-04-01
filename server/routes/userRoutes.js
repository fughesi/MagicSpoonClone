import express from "express";
import { getAllUsers, registerUser, userLogin, singleUser } from "../controllers/userController.js";
import validation from "../middleware/validateInput.js";
import { userValidation, loginValidation } from "../validations/validationHandler.js";

const router = express.Router();

//users
router.get("/", getAllUsers);
router.get("/current/:id", singleUser);
router.post("/login", validation(loginValidation), userLogin);
router.post("/registration", validation(userValidation), registerUser);

export default router;
