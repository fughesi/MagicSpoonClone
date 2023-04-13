import Joi from "joi";

// ======== CART ==============
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

// ======== USER ==============
const userValidation = Joi.object({
  id: Joi.string(),
  title: Joi.string(),
  username: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  age: Joi.number().min(1),
  language: Joi.string(),
  // language: Joi.array().items(Joi.string()),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().min(10),
  homeAddress: Joi.object({
    number: Joi.string(),
    street: Joi.string(),
    city: Joi.string(),
    state: Joi.string().length(2),
    zipCode: Joi.string(),
  }),
  shippingAddress: Joi.object({
    number: Joi.string(),
    street: Joi.string(),
    city: Joi.string(),
    state: Joi.string().length(2),
    zipCode: Joi.string(),
  }),
  password: Joi.string().required().min(3).max(1024).pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  confirmPassword: Joi.ref("password"),
});

// ======== TESTIMONIAL ==============
const testimonialValidation = Joi.object({
  id: Joi.string(),
  title: Joi.string().required().min(3).max(45),
  statement: Joi.string().required().min(5),
  company: Joi.string().required(),
  rating: Joi.number(),
});

// ======== LOGIN ==============
const loginValidation = Joi.object({
  email: Joi.string().required().email().min(5),
  password: Joi.string().required().min(3).max(1024).pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

// ======== PRODUCT ==============
const productValidation = Joi.object({
  id: Joi.string(),
  sku: Joi.string().required(),
  title: Joi.string().required().min(3),
  description: Joi.string(),
  stock: Joi.number().required(),
  price: Joi.number().required(),
  discountPercentage: Joi.number(),
  rating: Joi.number(),
  brand: Joi.string().required(),
  category: Joi.string().required(),
  ingredients: Joi.array(),
  stats: Joi.object(),
});

export { cartValidation, userValidation, testimonialValidation, productValidation, loginValidation };
