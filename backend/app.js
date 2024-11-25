const express = require("express")
require("express-async-errors")
const connectToDataBase = require("./database/connect")
const { validateToken } = require("./middlewares")
const authRouter = require("./routes/authRoutes")
const usersRouter = require("./routes/userRoutes")
const eventsRouter = require("./routes/eventRoutes")
const rsvpRouter = require("./routes/rsvpRoutes")
const adminRouter = require("./routes/adminRrouter")
const middleware = require("./middlewares/index")
const logger = require("./utils/logger")

const app = express()
connectToDataBase()

app.get("/", (request, response) => {
  response.send("hello world")
})

app.use(express.json())
app.use(logger.requestIdLogger)
app.use(logger.morganLogger)
app.use(logger.requestTimingLogger)

app.use("/api/auth", authRouter)
app.use("/api/users", validateToken, usersRouter)
app.use("/api/events", validateToken, eventsRouter)
app.use("/api/rsvp", validateToken, rsvpRouter)
app.use("/api/admin", validateToken, adminRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
