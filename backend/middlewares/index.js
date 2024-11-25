const validateToken = require("./validateToken")
const validateRequest = require("./validateRequest")
const checkRoles = require("./checkRoles")
const errorHandler = require("./errorHandler")

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" })
}

module.exports = {
  validateToken,
  validateRequest,
  checkRoles,
  errorHandler,
  unknownEndpoint,
}
