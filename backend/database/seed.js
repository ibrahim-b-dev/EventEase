const logger = require("./logger")
const User = require("../models/user")
const Event = require("../models/event")
const RSVP = require("../models/rsvp")
const { hashPassword } = require("./passwordUtils")

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
        roles: ["Organizer"],
        phone: "+1234567890",
      },
      {
        name: "John Doe",
        email: "john@example.com",
        password: "123456",
        roles: ["Organizer"],
        phone: "+1234567890",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        password: "123456",
        roles: ["User"],
        phone: "+1234567890",
      },
      {
        name: "Alice Johnson",
        email: "alice@example.com",
        password: "123456",
        role: ["User"],
        phone: "+1234567890",
      }
    ]

    const hashedUsersData = await Promise.all(
      usersData.map(async (user) => {
        const hashedPassword = await hashPassword(user.password);
        return { ...user, password: hashedPassword };
      })
    );

    const users = await User.insertMany(hashedUsersData)
    logger.info("Seeded Users:", users)

    const ibrahim = users.find((user) => user.name === "Ibrahim Dev")
    const john = users.find((user) => user.name === "John Doe")
    const jane = users.find((user) => user.name === "Jane Smith")
    const alice = users.find((user) => user.name === "Alice Johnson")

    const events = await Event.insertMany([
      {
        title: "Tech Meetup",
        description: "A meetup for tech enthusiasts.",
        eventDateTime: new Date("2024-12-10T10:00:00.000Z"),
        location: "City Hall",
        organizerID: john._id,
        capacity: 100,
        ticketPricing: { price: 50, registrationDeadline: new Date("2024-12-01T23:59:59.000Z") },
        categories: ["Technology", "Networking"],
      },
      {
        title: "Startup Pitch Night",
        description: "Pitch your startup ideas to potential investors.",
        eventDateTime: new Date("2024-12-15T09:00:00.000Z"),
        location: "Innovation Hub",
        organizerID: ibrahim._id,
        capacity: 200,
        ticketPricing: { price: 100, registrationDeadline: new Date("2024-12-05T23:59:59.000Z") },
        categories: ["Startup", "Innovation"],
      },
      {
        title: "AI Workshop",
        description: "Learn the basics of AI and machine learning.",
        eventDateTime: new Date("2024-12-15T09:00:00.000Z"),
        location: "Tech Center",
        organizerID: john._id,
        capacity: 200,
        ticketPricing: { price: 100, registrationDeadline: new Date("2024-12-05T23:59:59.000Z") },
        categories: ["Artificial Intelligence", "Innovation"],
      },
    ])
    logger.info("Seeded Events:", events)

    const techMeetup = events.find((event) => event.title === "Tech Meetup")
    const startupPitchNight = events.find(
      (event) => event.title === "Startup Pitch Night"
    )
    const aiWorkshop = events.find((event) => event.title === "AI Workshop")

    const rsvps = await RSVP.insertMany([
      {
        userID: jane._id,
        eventID: techMeetup._id,
        RSVP_Status: "Yes",
        attendeesCount: 2,
      },
      {
        userID: alice._id,
        eventID: techMeetup._id,
        RSVP_Status: "No",
      },
      {
        userID: jane._id,
        eventID: aiWorkshop._id,
        RSVP_Status: "Yes",
        attendeesCount: 1,
      },
      {
        userID: alice._id,
        eventID: startupPitchNight._id,
        RSVP_Status: "Maybe",
        attendeesCount: 1,
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
