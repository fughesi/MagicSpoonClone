import jwt from "jsonwebtoken";

const getToken = (req, res, next) => {
  // const
  console.log(req.headers);

  next();
};

export default getToken;
