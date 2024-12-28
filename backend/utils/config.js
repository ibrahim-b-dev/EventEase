require("dotenv").config()

const PORT = process.env.PORT || 3001
const MONGODB_URI = process.env.MONGODB_URI
const LOCAL_MONGODB_URI = process.env.LOCAL_MONGODB_URI || "mongodb://127.0.0.1:27017/EventEase"
const JWT_SECRET= process.env.JWT_SECRET
const EXPIRES_IN= process.env.EXPIRES_IN || "1d"

// console.log("Loaded Environment Variables:", process.env)

module.exports = {
  PORT,
  MONGODB_URI,
  LOCAL_MONGODB_URI,
  JWT_SECRET,
  EXPIRES_IN
}
