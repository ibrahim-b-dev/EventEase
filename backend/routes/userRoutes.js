const usersRouter = require("express").Router()
const { getProfile, setProfile } = require("../controllers/usersController")
const { checkRoles, checkUserActive } = require("../middlewares")
const { validateRequest } = require("../middlewares/validators")
const updateUserSchema = require("../schemas/updateUserSchema")

usersRouter.use(checkRoles("User", "Organizer", "Admin"))
usersRouter.get("/profile", getProfile)
usersRouter.put(
  "/profile",
  checkUserActive,
  validateRequest(updateUserSchema),
  setProfile
)

module.exports = usersRouter
