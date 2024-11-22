const express = require("express")
require("express-async-errors")
const connectToDataBase = require("./utils/database")
const { validateToken, checkRoles } = require("./middlewares")
const authRouter = require("./controllers/authController")
const usersRouter = require("./controllers/usersController")
const eventsRouter = require("./routes/eventRoutes")
const middleware = require("./middlewares/index")

const app = express()

connectToDataBase()

app.get("/", (request, response) => {
  response.send("hello world")
})

app.use(express.json())
app.use("/api/auth", authRouter)
app.use(
  "/api/users",
  validateToken,
  checkRoles("User", "Organizer"),
  usersRouter
)
app.use("/api/events", validateToken, eventsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
