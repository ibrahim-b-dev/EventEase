const { verifyToken } = require("../utils/tokenUtils")
const User = require("../models/user")
const logger = require("../utils/logger")

const validateToken = async (req, res, next) => {
  const authHeader = req.get("authorization")

  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header missing" })
  }

  const token = authHeader.split(" ")[1]
  if (!token) {
    return res.status(401).json({
      error: "Token missing in authorization header",
    })
  }

  try {
    decodedToken = verifyToken(token)
    const user = await User.findById(decodedToken.id)
    if (user) {
      req.user = user
    }
    next()
  } catch (error) {
    return res.status(403).json({ error: "Invalid or expired token" })
  }
}

// role-based access middleware
const checkRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const userRoles = req.user?.roles

    const hasAccess = userRoles.some((role) => allowedRoles.includes(role))
    if (!userRoles || !hasAccess) {
      return res
        .status(403)
        .json({ error: "Access denied. Role not authorized." })
    }

    next()
  }
}

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknow endpoint" })
}

const errorHandler = (error, req, res, next) => {
  logger.error(error.messsage)

  switch (error.name) {
    case "ValidationError":
      return res.status(400).json({ error: error.message })
    case "CastError":
      return res.status(400).json({ error: "Error" })
    case "MongooseError":
      return res.status(400).json({ error: "Database Error" })
    default:
      return res.status(400).json({ error: error.message })
  }
}

module.exports = { validateToken, checkRoles, unknownEndpoint, errorHandler }
