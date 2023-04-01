import express from "express";
import { loginPage, registerPage, uploadPage, indexPage, cartInventoryPage } from "../controllers/serverController.js";
const router = express.Router();

router.get("/index", indexPage);
router.get("/login", loginPage);
router.get("/upload", uploadPage);
router.get("/register", registerPage);
router.get("/cartInventory", cartInventoryPage);

export default router;
