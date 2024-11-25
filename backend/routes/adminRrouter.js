const adminRouter = require("express").Router();
const {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
  createEvent,
  getEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
  createRsvp,
  getRsvp,
  getAllRsvps,
  updateRsvp,
  deleteRsvp,
} = require("../controllers/adminController");
const { checkRoles } = require("../middlewares");

// Role-based middleware
adminRouter.use(checkRoles("Admin"));

// User management routes
adminRouter.route("/users/manage")
  .get(getAllUsers)
  .post(createUser);
adminRouter.route("/users/manage/:id")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

// Event management routes
adminRouter.route("/events/manage")
  .get(getAllEvents)
  .post(createEvent);
adminRouter.route("/events/manage/:id")
  .get(getEvent)
  .put(updateEvent)
  .delete(deleteEvent);

// RSVP management routes
adminRouter.route("/rsvp/manage")
  .get(getAllRsvps)
  .post(createRsvp);
adminRouter.route("/rsvp/manage/:id")
  .get(getRsvp)
  .put(updateRsvp)
  .delete(deleteRsvp);

module.exports = adminRouter;
