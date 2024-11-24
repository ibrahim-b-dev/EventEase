const {
  addEvent,
  getAllEvents,
  getEvent,
  getEventRSVPs,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventsController")
const { checkRoles } = require("../middlewares")

const eventsRouter = require("express").Router()

eventsRouter.post("/", checkRoles("Organizer"), addEvent)

eventsRouter.get(
  "/",
  checkRoles("Organizer", "User"),
  getAllEvents
)

eventsRouter.get(
  "/:id",
  checkRoles("Organizer", "User"),
  getEvent
)

eventsRouter.get(
  "/:id/rsvps",
  checkRoles("Organizer"),
  getEventRSVPs
)

eventsRouter.put("/:id", checkRoles("Organizer"), updateEvent)

eventsRouter.delete("/:id", checkRoles("Organizer"), deleteEvent)

module.exports = eventsRouter
