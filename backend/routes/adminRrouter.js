const adminRouter = require("express").Router()
const {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/adminController")
const {
  addEvent,
  getAllEvents,
  getEvent,
  updateEvent,
  deleteEvent,
  getEventRSVPs,
} = require("../controllers/eventsController")
const {
  getUserRSVP,
  createRSVP,
  deleteUserRSVP,
} = require("../controllers/rsvpController")
const { checkRoles } = require("../middlewares")
const { validateRequest } = require("../middlewares/validators")
const {
  adminCreateUserSchema,
  addEventSchema,
  getAllEventsSchema,
  createRSVPSchema,
} = require("../schemas")
const adminUpdateUserSchema = require("../schemas/adminUpdateUserSchema")

adminRouter.use(checkRoles("Admin"))

// User management routes
adminRouter
  .route("/users")
  .post(validateRequest(adminCreateUserSchema), createUser)
  .get(getAllUsers)

adminRouter
  .route("/users/:id")
  .get(getUser)
  .put(validateRequest(adminUpdateUserSchema), updateUser)
  .delete(deleteUser)
// .delete(checkRoles("SuperAdmin"), deleteUser)

// Event management routes
adminRouter
  .route("/events")
  .post(validateRequest(addEventSchema), addEvent)
  .get(validateRequest(getAllEventsSchema), getAllEvents)

adminRouter
  .route("/events/:id")
  .get(getEvent)
  .put(validateRequest(addEventSchema), updateEvent)
  .delete(deleteEvent)

adminRouter.route("/events/:id/rsvps").get(getEventRSVPs)

// RSVP management routes
adminRouter
  .route("/rsvp")
  .post(validateRequest(createRSVPSchema), createRSVP)
  .get(getUserRSVP)

adminRouter.route("/rsvp/:id").delete(deleteUserRSVP)

module.exports = adminRouter
