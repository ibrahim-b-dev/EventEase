const usersRouter = require("express").Router()
const { getProfile, setProfile } = require("../controllers/usersController")
const { checkRoles } = require("../middlewares")

usersRouter.use(checkRoles("User", "Organizer", "Admin"))
usersRouter.get("/profile", getProfile)
usersRouter.put("/profile", setProfile)

module.exports = usersRouter
