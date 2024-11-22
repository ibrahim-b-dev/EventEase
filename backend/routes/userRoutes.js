const usersRouter = require("express").Router()
const { getProfile, setProfile } = require("../controllers/usersController")
const { checkRoles } = require("../middlewares")

usersRouter.get("/profile", checkRoles("User", "Organizer"), getProfile)
usersRouter.put("/profile", checkRoles("User", "Organizer"), setProfile)

module.exports = usersRouter
