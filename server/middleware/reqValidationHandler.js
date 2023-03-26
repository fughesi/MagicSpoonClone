import Joi from "joi";

const cartValidation = Joi.object({
  title: Joi.string().required().min(3),
  description: Joi.string(),
  quantity: Joi.number().required(),
  price: Joi.number().required(),
  discountPercentage: Joi.number(),
  rating: Joi.number(),
  stock: Joi.number(),
  brand: Joi.string().required(),
  category: Joi.string().required(),
});

const userValidation = Joi.object({
  title: Joi.string(),
  username: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  role: Joi.string(),
  active: Joi.boolean(),
  language: Joi.array().items(Joi.string()),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string(),
  password: Joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  confirmPassword: Joi.ref("password"),
});

const testimonialValidation = Joi.object({
  title: Joi.string().required().min(3).max(45),
  statement: Joi.string().required().min(5),
  company: Joi.string().required(),
  rating: Joi.number(),
});

const productValidation = Joi.object({
  sku: Joi.string().required(),
  title: Joi.string().required().min(3),
  description: Joi.string(),
  quantity: Joi.number().required(),
  price: Joi.number().required(),
  discountPercentage: Joi.number(),
  rating: Joi.number(),
  brand: Joi.string().required(),
  category: Joi.string().required(),
  ingredients: Joi.array(),
  stats: Joi.object(),
});

export { cartValidation, userValidation, testimonialValidation, productValidation };
