const mongoose = require("mongoose")
const config = require("./config")
const logger = require("./logger")

const URI = config.MONGODB_URI
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

mongoose.set("strictQuery", false)

const connectToDataBase = async () => {
  try {
    logger.info("connecting to MongoDB Server")
    await mongoose.connect(URI, clientOptions)
    logger.info("connected to MongoDB Server")
  } catch (error) {
    logger.error("error connecting to MongoDB: ", error.message)
  }
}

module.exports = connectToDataBase
