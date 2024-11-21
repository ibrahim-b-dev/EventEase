const logger = require("./logger")
const User = require("../models/user")
const Event = require("../models/event")
const RSVP = require("../models/rsvp")

const seedDatabase = async () => {
  try {
    await User.deleteMany({})
    await Event.deleteMany({})
    await RSVP.deleteMany({})
    logger.info("Cleared old data")

    const users = await User.insertMany([
      {
        name: "John Doe",
        email: "john@example.com",
        password: "hashedpassword1",
        role: "Organizer",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        password: "hashedpassword2",
        role: "Attendee",
      },
    ])
    logger.info("Seeded Users:", users)

    const organizer = users.find((user) => user.role === "Organizer")
    const attendee = users.find((user) => user.role === "Attendee")

    const events = await Event.insertMany([
      {
        title: "Tech Meetup",
        description: "A meetup for tech enthusiasts.",
        date: "2024-12-01",
        location: "City Hall",
        organizerID: organizer._id,
      },
    ])
    logger.info("Seeded Events:", events)

    const event = events[0]

    const rsvps = await RSVP.insertMany([
      {
        userID: attendee._id,
        eventID: event._id,
        RSVP_Status: "Yes",
      },
    ])
    logger.info("Seeded RSVPs:", rsvps)

    logger.info("Database seeded successfully")
    process.exit()
  } catch (err) {
    logger.error("Error seeding database:", err)
    process.exit(1)
  }
}

module.exports = seedDatabase