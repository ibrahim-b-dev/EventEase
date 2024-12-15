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
        title: "Tech Innovators Meetup",
        description: "Discuss the latest trends in tech innovation.",
        eventDateTime: new Date("2024-12-10T10:00:00.000Z"),
        location: "Innovation Hub, San Francisco",
        organizerID: ibrahim._id,
        capacity: 200,
        ticketPricing: 30,
        registrationDeadline: new Date("2024-12-01T23:59:59.000Z"),
        categories: ["Technology", "Networking"],
      },
      {
        title: "AI Future Summit",
        description: "Exploring the future of AI and its implications.",
        eventDateTime: new Date("2024-12-15T09:00:00.000Z"),
        location: "Tech Plaza, Austin",
        organizerID: john._id,
        capacity: 150,
        ticketPricing: 50,
        registrationDeadline: new Date("2024-12-05T23:59:59.000Z"),
        categories: ["Technology"],
      },
      {
        title: "Cloud Workshop",
        description: "Learn how to build scalable cloud applications.",
        eventDateTime: new Date("2024-12-20T14:00:00.000Z"),
        location: "Cloud Center, Seattle",
        organizerID: ibrahim._id,
        capacity: 80,
        ticketPricing: 100,
        registrationDeadline: new Date("2024-12-10T23:59:59.000Z"),
        categories: ["Technology"],
      },
      {
        title: "Cybersecurity Awareness Day",
        description: "Enhancing knowledge about cyber safety.",
        eventDateTime: new Date("2024-12-25T11:00:00.000Z"),
        location: "Tech Hall, New York",
        organizerID: john._id,
        capacity: 300,
        ticketPricing: 0,
        registrationDeadline: new Date("2024-12-20T23:59:59.000Z"),
        categories: ["Technology"],
      },
      {
        title: "Startup Founders Gathering",
        description: "Networking with aspiring and successful founders.",
        eventDateTime: new Date("2024-12-30T10:30:00.000Z"),
        location: "Venture Center, Boston",
        organizerID: ibrahim._id,
        capacity: 120,
        ticketPricing: 25,
        registrationDeadline: new Date("2024-12-20T23:59:59.000Z"),
        categories: ["Networking"],
      },
      {
        title: "JavaScript Developers Workshop",
        description: "Hands-on workshop for JavaScript enthusiasts.",
        eventDateTime: new Date("2025-01-05T13:00:00.000Z"),
        location: "Dev Hub, Los Angeles",
        organizerID: john._id,
        capacity: 100,
        ticketPricing: 40,
        registrationDeadline: new Date("2024-12-25T23:59:59.000Z"),
        categories: ["Technology", "Networking"],
      },
      {
        title: "SaaS Growth Hacking",
        description: "Strategies to grow SaaS businesses effectively.",
        eventDateTime: new Date("2025-01-10T08:00:00.000Z"),
        location: "Growth Lab, Austin",
        organizerID: ibrahim._id,
        capacity: 100,
        ticketPricing: 70,
        registrationDeadline: new Date("2025-01-01T23:59:59.000Z"),
        categories: ["Technology"],
      },
      {
        title: "Women in Tech Conference",
        description: "Highlighting achievements and fostering inclusivity.",
        eventDateTime: new Date("2025-01-15T17:00:00.000Z"),
        location: "Empowerment Hall, Chicago",
        organizerID: john._id,
        capacity: 250,
        ticketPricing: 20,
        registrationDeadline: new Date("2025-01-10T23:59:59.000Z"),
        categories: ["Networking"],
      },
      {
        title: "Open Source Hackathon",
        description: "Collaborate on open-source projects.",
        eventDateTime: new Date("2025-01-20T12:00:00.000Z"),
        location: "Code Center, Denver",
        organizerID: ibrahim._id,
        capacity: 150,
        ticketPricing: 0,
        registrationDeadline: new Date("2025-01-15T23:59:59.000Z"),
        categories: ["Technology", "Networking"],
      },
      {
        title: "Future of Tech Careers",
        description: "Preparing for opportunities in the tech industry.",
        eventDateTime: new Date("2025-01-25T15:00:00.000Z"),
        location: "Career Hub, San Francisco",
        organizerID: john._id,
        capacity: 400,
        ticketPricing: 30,
        registrationDeadline: new Date("2025-01-20T23:59:59.000Z"),
        categories: ["Technology"],
      },
      {
        title: "Tech Innovators Meetup 2",
        description: "Discuss the latest trends in tech innovation.",
        eventDateTime: new Date("2024-12-10T10:00:00.000Z"),
        location: "Innovation Hub, San Francisco",
        organizerID: ibrahim._id,
        capacity: 200,
        ticketPricing: 30,
        registrationDeadline: new Date("2024-12-01T23:59:59.000Z"),
        categories: ["Technology", "Networking"],
      },
      {
        title: "AI Future Summit 2",
        description: "Exploring the future of AI and its implications.",
        eventDateTime: new Date("2024-12-15T09:00:00.000Z"),
        location: "Tech Plaza, Austin",
        organizerID: john._id,
        capacity: 150,
        ticketPricing: 50,
        registrationDeadline: new Date("2024-12-05T23:59:59.000Z"),
        categories: ["Technology"],
      },
      {
        title: "Cloud Workshop 2",
        description: "Learn how to build scalable cloud applications.",
        eventDateTime: new Date("2024-12-20T14:00:00.000Z"),
        location: "Cloud Center, Seattle",
        organizerID: ibrahim._id,
        capacity: 80,
        ticketPricing: 100,
        registrationDeadline: new Date("2024-12-10T23:59:59.000Z"),
        categories: ["Technology"],
      },
      {
        title: "Cybersecurity Awareness Day 2",
        description: "Enhancing knowledge about cyber safety.",
        eventDateTime: new Date("2024-12-25T11:00:00.000Z"),
        location: "Tech Hall, New York",
        organizerID: john._id,
        capacity: 300,
        ticketPricing: 0,
        registrationDeadline: new Date("2024-12-20T23:59:59.000Z"),
        categories: ["Technology"],
      },
      {
        title: "Startup Founders Gathering 2",
        description: "Networking with aspiring and successful founders.",
        eventDateTime: new Date("2024-12-30T10:30:00.000Z"),
        location: "Venture Center, Boston",
        organizerID: ibrahim._id,
        capacity: 120,
        ticketPricing: 25,
        registrationDeadline: new Date("2024-12-20T23:59:59.000Z"),
        categories: ["Networking"],
      },
      {
        title: "JavaScript Developers Workshop 2",
        description: "Hands-on workshop for JavaScript enthusiasts.",
        eventDateTime: new Date("2025-01-05T13:00:00.000Z"),
        location: "Dev Hub, Los Angeles",
        organizerID: john._id,
        capacity: 100,
        ticketPricing: 40,
        registrationDeadline: new Date("2024-12-25T23:59:59.000Z"),
        categories: ["Technology", "Networking"],
      },
      {
        title: "SaaS Growth Hacking 2",
        description: "Strategies to grow SaaS businesses effectively.",
        eventDateTime: new Date("2025-01-10T08:00:00.000Z"),
        location: "Growth Lab, Austin",
        organizerID: ibrahim._id,
        capacity: 100,
        ticketPricing: 70,
        registrationDeadline: new Date("2025-01-01T23:59:59.000Z"),
        categories: ["Technology"],
      },
      {
        title: "Women in Tech Conference 2",
        description: "Highlighting achievements and fostering inclusivity.",
        eventDateTime: new Date("2025-01-15T17:00:00.000Z"),
        location: "Empowerment Hall, Chicago",
        organizerID: john._id,
        capacity: 250,
        ticketPricing: 20,
        registrationDeadline: new Date("2025-01-10T23:59:59.000Z"),
        categories: ["Networking"],
      },
      {
        title: "Open Source Hackathon 2",
        description: "Collaborate on open-source projects.",
        eventDateTime: new Date("2025-01-20T12:00:00.000Z"),
        location: "Code Center, Denver",
        organizerID: ibrahim._id,
        capacity: 150,
        ticketPricing: 0,
        registrationDeadline: new Date("2025-01-15T23:59:59.000Z"),
        categories: ["Technology", "Networking"],
      },
      {
        title: "Future of Tech Careers 2",
        description: "Preparing for opportunities in the tech industry.",
        eventDateTime: new Date("2025-01-25T15:00:00.000Z"),
        location: "Career Hub, San Francisco",
        organizerID: john._id,
        capacity: 400,
        ticketPricing: 30,
        registrationDeadline: new Date("2025-01-20T23:59:59.000Z"),
        categories: ["Technology"],
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

    const rsvpsData = [
      {
        userID: jane._id,
        eventID: events.find(
          (event) => event.title === "Tech Innovators Meetup"
        )._id,
        RSVP_Status: "yes",
        attendeesCount: 2,
      },
      {
        userID: alice._id,
        eventID: events.find((event) => event.title === "AI Future Summit")._id,
        RSVP_Status: "yes",
        attendeesCount: 1,
      },
      {
        userID: jane._id,
        eventID: events.find((event) => event.title === "Cloud Workshop")._id,
        RSVP_Status: "yes",
        attendeesCount: 1,
      },
      {
        userID: alice._id,
        eventID: events.find(
          (event) => event.title === "Cybersecurity Awareness Day"
        )._id,
        RSVP_Status: "maybe",
        attendeesCount: 1,
      },
      {
        userID: jane._id,
        eventID: events.find(
          (event) => event.title === "Startup Founders Gathering"
        )._id,
        RSVP_Status: "yes",
        attendeesCount: 3,
      },
      {
        userID: alice._id,
        eventID: events.find(
          (event) => event.title === "JavaScript Developers Workshop"
        )._id,
        RSVP_Status: "yes",
        attendeesCount: 2,
      },
      {
        userID: jane._id,
        eventID: events.find((event) => event.title === "SaaS Growth Hacking")
          ._id,
        RSVP_Status: "no",
      },
      {
        userID: alice._id,
        eventID: events.find(
          (event) => event.title === "Women in Tech Conference"
        )._id,
        RSVP_Status: "yes",
        attendeesCount: 4,
      },
      {
        userID: jane._id,
        eventID: events.find((event) => event.title === "Open Source Hackathon")
          ._id,
        RSVP_Status: "yes",
        attendeesCount: 5,
      },
      {
        userID: alice._id,
        eventID: events.find(
          (event) => event.title === "Future of Tech Careers"
        )._id,
        RSVP_Status: "yes",
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
