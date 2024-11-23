const express = require("express")
require("express-async-errors")
const connectToDataBase = require("./database/connect")
const { validateToken } = require("./middlewares")
const authRouter = require("./routes/authRoutes")
const usersRouter = require("./routes/userRoutes")
const eventsRouter = require("./routes/eventRoutes")
const rsvpRouter = require("./routes/rsvpRoutes")
const middleware = require("./middlewares/index")

const app = express()

connectToDataBase()

app.get("/", (request, response) => {
  response.send("hello world")
})

app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/users", validateToken, usersRouter)
app.use("/api/events", validateToken, eventsRouter)
app.use("/api/rsvp", validateToken, rsvpRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
