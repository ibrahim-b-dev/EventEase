const rsvpRouter = require("express").Router()
const {
  createRSVP,
  getUserRSVP,
  deleteUserRSVP,
} = require("../controllers/rsvpController")
const { checkRoles } = require("../middlewares")

rsvpRouter.use(checkRoles("User", "Admin"))
rsvpRouter.post("/", createRSVP)
rsvpRouter.get("/", getUserRSVP)
rsvpRouter.delete("/:id", deleteUserRSVP)

module.exports = rsvpRouter
