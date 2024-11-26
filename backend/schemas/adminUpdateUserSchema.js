const Joi = require("joi")

const adminUpdateUserSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    "string.base": "Name must be a string",
    "string.min": "Name must be at least 3 characters long",
    "any.required": "Name is required",
  }),

  email: Joi.string().email().required().messages({
    "string.base": "Email must be a string",
    "string.email": "Email must be a valid email address",
    "any.required": "Email is required",
  }),

  phone: Joi.string()
    .pattern(/^\+?[1-9]\d{1,14}$/)
    .optional()
    .messages({
      "string.base": "Phone must be a string",
    }),

  role: Joi.string().valid("User", "Organizer", "Admin").required().messages({
    "string.base": "Role must be a string",
    "any.only": "Role must be either 'User', 'Organizer' or 'Admin'",
  }),

  isActive: Joi.bool().optional().messages({
    "boolean.base": "The isActive field must be a boolean value.",
  }),
})

module.exports = adminUpdateUserSchema
