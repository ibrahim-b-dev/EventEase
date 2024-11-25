const validateToken = require("./validateToken")
const validators = require("./validators")
const checkRoles = require("./checkRoles")
const errorHandler = require("./errorHandler")

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" })
}

module.exports = {
  validateToken,
  validators,
  checkRoles,
  errorHandler,
  unknownEndpoint,
}
