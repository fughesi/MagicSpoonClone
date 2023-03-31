import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Users from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import { userValidation, loginValidation } from "../middleware/validationHandler.js";
import genAuthToken from "../middleware/getToken.js";
import USER_ROLES from "../config/userRoles.js";

//DESC - find all users
//ROUTE - GET /users
//ACCESS - public
const getAllUsers = asyncHandler(async (req, res) => {
  const findAllUsers = await Users.find();

  if (!findAllUsers) {
    res.status(404).json({ message: "no users found" });
  }

  res.status(200).json(findAllUsers);
});

//DESC - get a single user
//ROUTE - GET /users/current/:id
//ACCESS - private
const singleUser = asyncHandler(async (req, res) => {
  const foundUser = await Users.findOne({ _id: req.params.id });

  if (!foundUser) {
    res.status(404).json({ message: "no user with that email found in database" });
  }

  res.status(200).json({ message: "user found!", user: foundUser });
});

//DESC - register a new user
//ROUTE - POST /users/registration
//ACCESS - public
const registerUser = asyncHandler(async (req, res) => {
  const { error, title, username, firstName, lastName, language, email, phoneNumber, password } =
    await userValidation.validateAsync(req.body, { abortEarly: false });

  if (error) return res.status(400).json({ message: error.details[0]?.message }).end; // not working

  const userAvailable = await Users.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered or email already in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new Users({
    title,
    username,
    firstName,
    lastName,
    language,
    email,
    phoneNumber,
    password: hashedPassword,
    role: USER_ROLES.User,
    isActive: true,
    shoppingCart: [],
    savedForLater: [],
  });

  const token = genAuthToken(user);

  user.save((error) => {
    if (error) {
      res.status(500).json({ message: "unable to create user due to server error", error }).redirect("/registration");
    } else {
      res.status(201).json({ _id: user.id, email: user.email, token: token });
      console.log(`User ${user.username} created successfully!`);
    }
  });
});

//DESC -  user login page
//ROUTE - POST /users/login
//ACCESS - public
const userLogin = asyncHandler(async (req, res) => {
  const { error, email, password } = await loginValidation.validateAsync(req.body, { abortEarly: false });

  if (error) res.status(400).send(error.details[0].message); // not working

  const loggedInUser = await Users.findOne({ email: email });

  if (loggedInUser && (await bcrypt.compare(password, loggedInUser.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: loggedInUser.username,
          role: USER_ROLES.Admin,
          email: loggedInUser.email,
          id: loggedInUser.id,
        },
      },
      process.env.JWT,
      { expiresIn: "1d" }
    );

    res.status(200).json({ accessToken });
  } else {
    res.status(401).json({ message: "invalid credentials" });
    throw new Error("Incorrect email or password");
  }
});

export { getAllUsers, registerUser, userLogin, singleUser };
