const validateToken = require("./validateToken")
const checkRoles = require("./checkRoles")
const errorHandler = require("./errorHandler")

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" })
}

module.exports = {
  validateToken,
  checkRoles,
  errorHandler,
  unknownEndpoint,
}
