require("dotenv").config()
// console.log("Loaded Environment Variables:", process.env)

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const LOCAL_MONGODB_URI = process.env.LOCAL_MONGODB_URI

module.exports = {
  PORT,
  MONGODB_URI,
  LOCAL_MONGODB_URI,
}
