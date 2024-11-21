const jwt = require("jsonwebtoken")
const config = require("./config")

const sign = (object) => {
  try {
    return jwt.sign(object, config.JWT_SECRET, { expiresIn: config.EXPIRES_IN })
  } catch (err) {
    throw new Error("Error signing the token")
  }
}

const verify = (token) => {
  try {
    return jwt.verify(token, config.JWT_SECRET)
  } catch (error) {
    throw new Error("Invalid or expired token")
  }
}

module.exports = {
  sign,
  verify,
}
