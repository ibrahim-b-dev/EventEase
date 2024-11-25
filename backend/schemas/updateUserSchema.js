const Joi = require("joi");

const updateUserSchema = Joi.object({
  name: Joi.string().optional().messages({
    "string.base": "Name must be a string",
  }),
  email: Joi.string().email().optional().messages({
    "string.base": "Email must be a string",
    "string.email": "Email must be a valid email address",
  }),
  phone: Joi.string()
    .pattern(/^\+?[1-9]\d{1,14}$/)
    .optional()
    .messages({
      "string.base": "Phone number must be a string",
      "string.pattern.base": "Phone number must be valid (E.164 format, e.g., +1234567890)",
    }),
}).or("name", "email", "phone")
.messages({
  "object.missing": "At least one field (name, email, phone) is required",
});

module.exports = updateUserSchema;
