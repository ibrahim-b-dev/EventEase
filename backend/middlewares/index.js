const { verifyToken } = require("../utils/tokenUtils")

const tokenValidator = async (req, res, next) => {
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
    req.token = decodedToken
    next()
  } catch (error) {
    return res.status(403).json({ error: "Invalid or expired token" })
  }
}

module.exports = { tokenValidator }
