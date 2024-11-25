const eventsRouter = require("express").Router()
const {
  checkRoles,
  validators: { validateRequest, validateQuery },
} = require("../middlewares")
const { addEventSchema, getAllEventsSchema } = require("../schemas")
const {
  addEvent,
  getAllEvents,
  getEvent,
  getEventRSVPs,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventsController")

eventsRouter.post(
  "/",
  validateRequest(addEventSchema),
  checkRoles("Organizer", "Admin"),
  addEvent
)

eventsRouter.get(
  "/",
  validateQuery(getAllEventsSchema),
  checkRoles("Organizer", "User", "Admin"),
  getAllEvents
)

eventsRouter.get("/:id", checkRoles("Organizer", "User", "Admin"), getEvent)

eventsRouter.get("/:id/rsvps", checkRoles("Organizer", "Admin"), getEventRSVPs)

eventsRouter.put(
  "/:id",
  validateRequest(addEventSchema),
  checkRoles("Organizer", "Admin"),
  updateEvent
)

eventsRouter.delete("/:id", checkRoles("Organizer", "Admin"), deleteEvent)

module.exports = eventsRouter
