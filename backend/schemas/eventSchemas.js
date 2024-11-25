const Joi = require("joi");

const addEventSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  eventDateTime: Joi.date().required(),
  location: Joi.string().required(),
  capacity: Joi.number().integer().positive().required(),
  ticketPricing: Joi.number().positive().optional(),
  registrationDeadline: Joi.date().required(),
  categories: Joi.array().items(Joi.string()).min(1).required(),
});

module.exports = { addEventSchema };
