import jwt from "jsonwebtoken";
import USER_ROLES from "../config/userRoles.js";

const genAuthToken = (user) => {
  const secretKey = process.env.JWT;

  const token = jwt.sign(
    {
      _id: user._id,
      username: user.username,
      role: USER_ROLES.Admin,
      email: user.email,
    },
    secretKey
  );

  return token;
};

export default genAuthToken;
