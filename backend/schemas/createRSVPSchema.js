const Joi = require("joi");

const createRSVPSchema = Joi.object({
  eventID: Joi.string()
    .required()
    .messages({
      "any.required": "eventID is required",
      "string.base": "eventID must be a string",
    }),
  RSVP_Status: Joi.string()
    .valid("yes", "maybe", "no")
    .required()
    .messages({
      "any.required": "RSVP_Status is required",
      "string.base": "RSVP_Status must be a string",
      "any.only": "RSVP_Status must be one of 'yes', 'maybe', or 'no'",
    }),
  attendeesCount: Joi.number()
    .integer()
    .positive()
    .optional()
    .default(1)
    .messages({
      "number.base": "attendeesCount must be a number",
      "number.integer": "attendeesCount must be an integer",
      "number.positive": "attendeesCount must be a positive number",
    }),
});

module.exports = createRSVPSchema;
