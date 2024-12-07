const eventsRouter = require("express").Router()
const {
  checkRoles,
  validators: { validateRequest, validateQuery },
  checkUserActive,
} = require("../middlewares")
const { addEventSchema, getAllEventsSchema } = require("../schemas")
const {
  addEvent,
  getAllEvents,
  getPopularEvents,
  getEvent,
  getEventRSVPs,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventsController")

eventsRouter.use(checkUserActive)

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
