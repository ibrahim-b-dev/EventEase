const eventsRouter = require("express").Router()
const { checkRoles } = require("../middlewares")
const {
  addEvent,
  getAllEvents,
  getEvent,
  getEventRSVPs,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventsController")

eventsRouter.post("/", checkRoles("Organizer", "Admin"), addEvent)

eventsRouter.get(
  "/",
  checkRoles("Organizer", "User", "Admin"),
  getAllEvents
)

eventsRouter.get(
  "/:id",
  checkRoles("Organizer", "User", "Admin"),
  getEvent
)

eventsRouter.get(
  "/:id/rsvps",
  checkRoles("Organizer", "Admin"),
  getEventRSVPs
)

eventsRouter.put("/:id", checkRoles("Organizer", "Admin"), updateEvent)

eventsRouter.delete("/:id", checkRoles("Organizer", "Admin"), deleteEvent)

module.exports = eventsRouter
