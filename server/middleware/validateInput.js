const validation = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    res.status(400);
    throw new Error(error.details[0]?.message);
  }

  next();
};

export default validation;
