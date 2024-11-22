const rsvpRouter = require("express").Router()
const {
  createRSVP,
  getRSVP,
  deleteRSVP,
} = require("../controllers/rsvpController")
const { checkRoles } = require("../middlewares")

rsvpRouter.use(checkRoles("User"))
rsvpRouter.post("/rsvp", createRSVP)
rsvpRouter.get("/rsvp", getRSVP)
rsvpRouter.delete("/rsvp", deleteRSVP)

module.exports = rsvpRouter
