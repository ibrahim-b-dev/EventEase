const { logger } = require("../utils/logger")

const errorHandler = (error, req, res, next) => {
  logger.error(`Error occurred in ${req.method} ${req.originalUrl}:`, error)

  switch (error.name) {
    case "SyntaxError":
      logger.error(`Invalid JSON in request body: ${error.message}`)
      return res.status(400).send({ error: "Invalid JSON format" })

    case "CastError":
      const { path, kind, value } = error
      logger.error(
        `Invalid value for '${path}': expected a ${kind}, but received ${JSON.stringify(
          value
        )}`
      )
      return res.status(400).json({
        error: `Invalid value for '${path}': expected a ${kind}, but received ${JSON.stringify(
          value
        )}.`,
      })

    case "ValidationError":
      const validationErrors = Object.values(error.errors).map(
        (validationError) => {
          const { kind, path, value, message } = validationError
          logger.error(
            `Validation failed on '${path}': ${message} (kind: ${kind}, value: ${value})`
          )
          return `${path} failed validation: ${message} (kind: ${kind}, value: ${value})`
        }
      )

      return res.status(400).json({
        error: "Validation error(s) occurred.",
        details: validationErrors,
      })

    case "MongooseError":
      logger.error(`Mongoose error: ${error.message}`)
      return res
        .status(400)
        .json({ error: "Database error occurred. Please try again later." })

    case "JsonWebTokenError":
      logger.error(`JWT error: ${error.message}`)
      return res
        .status(401)
        .json({ error: "Invalid token. Please log in again." })

    case "TokenExpiredError":
      logger.error(`JWT token expired: ${error.message}`)
      return res
        .status(401)
        .json({ error: "Token expired. Please log in again." })

    default:
      logger.error(`Unexpected error: ${error.message}`)
      return res.status(500).json({
        error: "An unexpected error occurred. Please try again later.",
      })
  }
}

module.exports = errorHandler
