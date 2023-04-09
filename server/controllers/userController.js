import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Users } from "../models/userModel.js";
import USER_ROLES from "../config/userRoles.js";
import asyncHandler from "express-async-handler";
import genAuthToken from "../middleware/genAuthToken.js";

//============================================================

//DESC - find all users
//ROUTE - GET /users
//ACCESS - public
const getAllUsers = asyncHandler(async (req, res) => {
  const findAllUsers = await Users.find();

  if (!findAllUsers) {
    res.status(404);
    throw new Error("no users found");
  }

  res.status(200).json(findAllUsers);
});

//============================================================

//DESC - get a single user
//ROUTE - GET /users/current/:id
//ACCESS - private
const singleUser = asyncHandler(async (req, res) => {
  const foundUser = await Users.findOne({ _id: req.params.id });

  if (!foundUser) {
    res.status(404);
    throw new Error("no user with that email found in database");
  }

  res.status(200).json({ message: "user found!", user: foundUser });
});

//============================================================

//DESC - register a new user
//ROUTE - POST api/users/registration
//ACCESS - public
const registerUser = asyncHandler(async (req, res) => {
  const {
    title,
    username,
    firstName,
    lastName,
    age,
    language,
    email,
    homeAddress,
    shippingAddress,
    phoneNumber,
    password,
  } = req.body;

  const userUnavailable = await Users.findOne({ email });

  if (userUnavailable) {
    res.status(400);
    throw new Error("User already registered or email already in use, please login to continue");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new Users({
    title,
    username,
    firstName,
    lastName,
    age,
    language,
    email,
    phoneNumber,
    homeAddress,
    shippingAddress,
    password: hashedPassword,
    role: USER_ROLES.User,
    isActive: true,
    shoppingCart: [],
    savedForLater: [],
  });

  const token = genAuthToken(user);

  user.save((error) => {
    if (error) {
      console.log(error);
      res.status(400);
      throw new Error("unable to create user at this time");
    } else {
      res.status(201).json({ _id: user.id, email: user.email, token: token });
      console.log(`User ${user.username} created successfully!`);
    }
  });
});

//============================================================

//DESC -  user login page
//ROUTE - POST /api/users/login
//ACCESS - public
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const loggedInUser = await Users.findOne({ email });

  if (loggedInUser && (await bcrypt.compare(password, loggedInUser.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: loggedInUser.username,
          role: USER_ROLES.User, // hard-coded, need to make dynamic
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
