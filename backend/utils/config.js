require("dotenv").config()

const PORT = process.env.PORT || 3001
const LOCAL_MONGODB_URI = process.env.LOCAL_MONGODB_URI || "mongodb://127.0.0.1:27017/EventEase"
const PROD_MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET= process.env.JWT_SECRET
const EXPIRES_IN= process.env.EXPIRES_IN || "1d"

// console.log("Loaded Environment Variables:", process.env)
const MONGODB_URI = process.env.NODE_ENV === 'production' ? PROD_MONGODB_URI : LOCAL_MONGODB_URI;

module.exports = {
  PORT,
  MONGODB_URI,
  JWT_SECRET,
  EXPIRES_IN
}
