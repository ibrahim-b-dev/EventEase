const Joi = require("joi")

const getAllEventsSchema = Joi.object({
  startDate: Joi.date().iso().optional(),
  endDate: Joi.date().iso().optional(),
  location: Joi.string().optional(),
  sortBy: Joi.string()
    .valid("eventDateTime", "popularity")
    .default("eventDateTime"),
  order: Joi.string().valid("asc", "desc").default("asc"),
})

module.exports = getAllEventsSchema
