const bcrypt = require("bcrypt")
const saltRounds = 10

const hashPassword = async (password) => {
  try {
    const passwordHash = await bcrypt.hash(password, saltRounds)
    return passwordHash
  } catch (error) {
    throw new Error("Error hashing password")
  }
}

const verifyPassword = async (password, hash) => {
  try {
    const passwordCorrect = await bcrypt.compare(password, hash)
    return passwordCorrect
  } catch (error) {
    throw new Error("Error verifying password")
  }
}

module.exports = {
  hashPassword,
  verifyPassword,
}
