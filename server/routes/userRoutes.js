import express from "express";
import { getAllUsers, registerUser, userLogin, singleUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/current/:id", singleUser);
router.post("/login", userLogin);
router.post("registrationPage", registerUser);

export default router;

// const users = [];
// router.get("/loginPage", (req, res) => {
//   res.render("login", { title: "LOGIN system" });
// });

// router
//   .get("/registerPage", (req, res) => {
//     res.render("register", { title: "registration" });
//   })
//   .post("/registerPage", async (req, res) => {
//     const { username, email, password } = req.body;

//     try {
//       const hashedPassword = await bcrypt.hash(password, 10);
//       users.push({
//         id: Date.now().toString(),
//         username,
//         email,
//         password: hashedPassword,
//       });
//       res.redirect("/loginPage");
//     } catch (error) {
//       console.log(error);
//       res.redirect("/registrationPage");
//     }
//     res.send(users);
//     console.log(users);
//   });

// router
//   .route("/")
//   .get(async (req, res) => {
//     const allUsers = await Users.find().lean();

//     if (!allUsers.length) res.status(400).json({ message: "no users found" });

//     try {
//       res.json(allUsers);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ message: `failed to fetch` });
//     }
//   })
//   .post((req, res) => {
//     res.json({ message: "post created..." });
//   });

// router.route(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//     failureFlash: true,
//   })
// );

// router.route("/login/:id").get(async (req, res) => {
//   res.json({ message: "this is awesome", id: req.params.id });
// });
