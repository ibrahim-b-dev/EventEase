const addEventSchema = require("./addEventSchema")
const getAllEventsSchema = require("./getAllEventsSchema")
const registerSchema = require("./registerSchema")
const updateUserSchema = require("./updateUserSchema")
const createRSVPSchema = require("./createRSVPSchema")
const adminCreateUserSchema = require("./adminCreateUserSchema")

module.exports = {
  addEventSchema,
  getAllEventsSchema,
  updateUserSchema,
  registerSchema,
  createRSVPSchema,
  adminCreateUserSchema
}
