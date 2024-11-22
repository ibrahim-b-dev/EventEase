const {
  addEvent,
  getAllEvents,
  getEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventsController")
const { validateToken, checkRoles } = require("../middlewares")

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

eventsRouter.put("/:id", checkRoles("Organizer"), updateEvent)

eventsRouter.delete("/:id", checkRoles("Organizer"), deleteEvent)

module.exports = eventsRouter
