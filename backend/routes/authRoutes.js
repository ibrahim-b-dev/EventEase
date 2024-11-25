const authRouter = require("express").Router()
const { register, login } = require("../controllers/authController")
const { validateRequest } = require("../middlewares/validators")
const { registerSchema } = require("../schemas")

authRouter.post("/register", validateRequest(registerSchema), register)
authRouter.post("/login", login)

module.exports = authRouter
