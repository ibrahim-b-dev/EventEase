const validateToken = require("./validateToken")
const checkUserActive = require("./checkUserActive")
const validators = require("./validators")
const checkRoles = require("./checkRoles")
const errorHandler = require("./errorHandler")

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" })
}

module.exports = {
  validateToken,
  checkUserActive,
  validators,
  checkRoles,
  errorHandler,
  unknownEndpoint,
}
