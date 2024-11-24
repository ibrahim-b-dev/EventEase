#!/usr/bin/env node

const config = require("../utils/config")
const mongoose = require("mongoose")
const logger = require("../utils/logger")
const User = require("../models/user")
const Event = require("../models/event")
const RSVP = require("../models/rsvp")

const args = process.argv.slice(2)

const connectDB = async () => {
  const URI = config.LOCAL_MONGODB_URI
  // const URI = config.MONGODB_URI
  const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
  }

  mongoose.set("strictQuery", false)

  try {
    await mongoose.connect(URI, clientOptions)
    logger.info("Connected to MongoDB")
  } catch (err) {
    logger.error("Error connecting to MongoDB:", err)
    process.exit(1)
  }
}

const runCommand = async () => {
  await connectDB()

  const command = args[0]

  switch (command) {
    case "seed":
      await require("./seed")()
      break

    case "list-users":
      const users = await User.find()
      logger.info("Users:", users)
      break

    case "list-events":
      const events = await Event.find()
      logger.info("Events:", events)
      break

    case "list-rsvps":
      const rsvps = await RSVP.find()
      logger.info("RSVPs:", rsvps)
      break

    case "delete-users":
      await User.deleteMany({})
      logger.info("All users deleted")
      break

    case "delete-events":
      await Event.deleteMany({})
      logger.info("All events deleted")
      break

    case "delete-rsvps":
      await RSVP.deleteMany({})
      logger.info("All RSVPs deleted")
      break

    case "delete-all":
      await User.deleteMany({})
      await Event.deleteMany({})
      await RSVP.deleteMany({})
      logger.info("Cleared all data")
      break

    default:
      logger.info(
        "Invalid command. Available commands: seed, list-users, list-events, list-rsvps, delete-users, delete-events, delete-rsvps"
      )
  }

  mongoose.connection.close()
  process.exit()
}

runCommand()
