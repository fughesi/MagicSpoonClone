import asyncHandler from "express-async-handler";
import Users from "../models/userModel.js";
import { userValidation } from "../middleware/reqValidationHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
  res.send("what up");
  // const foundUser = await Users.findOne({})

  //     res.status(200).json({ message: "this is awesome", id: req.params.id });
});

//DESC - register a new user
//ROUTE - POST /users/registration
//ACCESS - public
const registerUser = asyncHandler(async (req, res) => {
  const { error, title, username, firstName, lastName, role, active, language, email, phoneNumber, password } =
    await userValidation.validateAsync(req.body, { abortEarly: false });

  if (error) return res.status(400).json({ message: error.details[0]?.message });

  const userAvailable = await Users.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await Users.create({
    title,
    username,
    firstName,
    lastName,
    role,
    active,
    language,
    email,
    phoneNumber,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
    console.log(`User ${user.username} created successfully!`);
  } else {
    res.status(500).json({ message: "unable to create user due to server error", error }).redirect("/registrationPage");
  }
});

//DESC -  user login page
//ROUTE - POST /users/login
//ACCESS - public
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = await userValidation.validateAsync(req.body, { abortEarly: false });

  const loggedInUser = await Users.findOne({ email });

  if (loggedInUser && (await bcrypt.compare(password, loggedInUser.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: loggedInUser.username,
          email: loggedInUser.email,
          id: loggedInUser.id,
        },
      },
      process.env.JWT,
      { expiresIn: "15m" }
    );

    res.status(200).json({ accessToken });
  } else {
    res.status(401).json({ message: "invalid credentials" });
    throw new Error("Incorrect email or password");
  }
});

export { getAllUsers, registerUser, userLogin, singleUser };
