import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader) return res.status(401).json({ message: "not authorized" });

  console.log(authHeader);

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT, (error, decoded) => {
    if (error) return res.status(403).json({ message: "not authorized or not logged in" });
    req.user = decoded.username;
    next();
  });
};

export default verifyToken;
