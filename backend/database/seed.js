const { logger } = require("../utils/logger")
const User = require("../models/user")
const Event = require("../models/event")
const RSVP = require("../models/rsvp")
const { hashPassword } = require("../utils/passwordUtils")

const seedDatabase = async () => {
  try {
    await User.deleteMany({})
    await Event.deleteMany({})
    await RSVP.deleteMany({})
    logger.info("Cleared old data")

    const usersData = [
      {
        name: "Ibrahim Dev",
        email: "ibrahim@example.com",
        password: "123456",
        role: "Organizer",
        phone: "+1234567890",
      },
      {
        name: "John Doe",
        email: "john@example.com",
        password: "123456",
        role: "Organizer",
        phone: "+1234567890",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        password: "123456",
        role: "User",
        phone: "+1234567890",
      },
      {
        name: "Alice Johnson",
        email: "alice@example.com",
        password: "123456",
        role: "User",
        phone: "+1234567890",
      },
    ]

    const hashedUsersData = await Promise.all(
      usersData.map(async (user) => {
        const hashedPassword = await hashPassword(user.password)
        return { ...user, password: hashedPassword }
      })
    )

    const users = await User.insertMany(hashedUsersData)
    logger.info("Seeded Users:")
    logger.info(users)

    const ibrahim = users.find((user) => user.name === "Ibrahim Dev")
    const john = users.find((user) => user.name === "John Doe")
    const jane = users.find((user) => user.name === "Jane Smith")
    const alice = users.find((user) => user.name === "Alice Johnson")

    const eventsData = [
      {
        title: "Tech Meetup",
        description: "A meetup for tech enthusiasts.",
        eventDateTime: new Date("2024-12-10T10:00:00.000Z"),
        location: "City Hall",
        organizerID: john._id,
        capacity: 100,
        ticketPricing: 50,
        registrationDeadline: new Date("2024-12-01T23:59:59.000Z"),
        categories: ["Technology", "Networking"],
      },
      {
        title: "Startup Pitch Night",
        description: "Pitch your startup ideas to potential investors.",
        eventDateTime: new Date("2024-11-25T18:00:00.000Z"),
        location: "Innovation Hub",
        organizerID: ibrahim._id,
        capacity: 150,
        ticketPricing: 75,
        registrationDeadline: new Date("2024-11-20T23:59:59.000Z"),
        categories: ["Startup", "Business"],
      },
      {
        title: "AI Workshop",
        description: "Learn the basics of AI and machine learning.",
        eventDateTime: new Date("2024-12-15T09:00:00.000Z"),
        location: "Tech Center",
        organizerID: john._id,
        capacity: 50,
        ticketPricing: 100,
        registrationDeadline: new Date("2024-12-10T23:59:59.000Z"),
        categories: ["Artificial Intelligence", "Learning"],
      },
      {
        title: "Music Festival",
        description: "A night of amazing performances.",
        eventDateTime: new Date("2024-12-31T20:00:00.000Z"),
        location: "Central Park",
        organizerID: ibrahim._id,
        capacity: 500,
        ticketPricing: 150,
        registrationDeadline: new Date("2024-12-20T23:59:59.000Z"),
        categories: ["Music", "Entertainment"],
      },
    ]

    const events = []
    for (const eventData of eventsData) {
      const event = new Event(eventData)
      await event.save()
      events.push(event)
    }
    logger.info("Seeded Events:")
    logger.info(events)

    const techMeetup = events.find((event) => event.title === "Tech Meetup")
    const startupPitchNight = events.find(
      (event) => event.title === "Startup Pitch Night"
    )
    const aiWorkshop = events.find((event) => event.title === "AI Workshop")

    const rsvpsData = [
      {
        userID: jane._id,
        eventID: techMeetup._id,
        RSVP_Status: "yes",
        attendeesCount: 2,
      },
      {
        userID: alice._id,
        eventID: techMeetup._id,
        RSVP_Status: "yes",
      },
      {
        userID: jane._id,
        eventID: aiWorkshop._id,
        RSVP_Status: "yes",
        attendeesCount: 1,
      },
      {
        userID: alice._id,
        eventID: startupPitchNight._id,
        RSVP_Status: "maybe",
        attendeesCount: 1,
      },
    ]

    const rsvps = []
    for (const rsvpData of rsvpsData) {
      const rsvp = new RSVP(rsvpData)
      await rsvp.save()
      rsvps.push(rsvp)
    }
    logger.info("Seeded RSVPs:")
    logger.info(rsvps)
    
    logger.info("Database seeded successfully")
    process.exit()
  } catch (err) {
    logger.error("Error seeding database:", err)
    process.exit(1)
  }
}

module.exports = seedDatabase
