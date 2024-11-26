const rsvpRouter = require("express").Router()
const {
  createRSVP,
  getUserRSVP,
  deleteUserRSVP,
} = require("../controllers/rsvpController")
const { checkRoles, checkUserActive } = require("../middlewares")
const { validateRequest } = require("../middlewares/validators")
const { createRSVPSchema } = require("../schemas")

rsvpRouter.use(checkUserActive)
rsvpRouter.use(checkRoles("User", "Admin"))
rsvpRouter.post("/", validateRequest(createRSVPSchema), createRSVP)
rsvpRouter.get("/", getUserRSVP)
rsvpRouter.delete("/:id", deleteUserRSVP)

module.exports = rsvpRouter
