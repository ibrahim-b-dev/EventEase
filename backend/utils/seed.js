const mongoose = require("mongoose")
const config = require("./config")
const logger = require("./logger")
const User = require("../models/user")
const Event = require("../models/event")
const RSVP = require("../models/rsvp")

const seedDatabase = async () => {
  const URI = config.MONGODB_URI
  const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
  }

  try {
    await mongoose.connect(URI, clientOptions)
    logger.info("Connected to MongoDB")

    await User.deleteMany({})
    await Event.deleteMany({})
    await RSVP.deleteMany({})
    logger.info("Cleared old data")

    const users = await User.insertMany([
      {
        userID: "U123",
        name: "John Doe",
        email: "john@example.com",
        password: "hashedpassword1",
        role: "Organizer",
      },
      {
        userID: "U456",
        name: "Jane Smith",
        email: "jane@example.com",
        password: "hashedpassword2",
        role: "Attendee",
      },
    ])
    logger.info("Seeded Users:", users)

    const events = await Event.insertMany([
      {
        eventID: "E123",
        title: "Tech Meetup",
        description: "A meetup for tech enthusiasts.",
        date: "2024-12-01",
        location: "City Hall",
        organizerID: "U123",
      },
    ])
    logger.info("Seeded Events:", events)

    const rsvps = await RSVP.insertMany([
      { RSVP_ID: "R123", userID: "U456", eventID: "E123", RSVP_Status: "Yes" },
    ])
    logger.info("Seeded RSVPs:", rsvps)

    logger.info("Database seeded successfully")
    process.exit()
  } catch (err) {
    logger.error("Error seeding database:", err)
    process.exit(1)
  }
}

seedDatabase()
