const express = require("express")
require("express-async-errors")
const connectToDataBase = require("./database/connect")
const cors = require("cors")
const { validateToken } = require("./middlewares")
const authRouter = require("./routes/authRoutes")
const usersRouter = require("./routes/userRoutes")
const eventsRouter = require("./routes/eventRoutes")
const rsvpRouter = require("./routes/rsvpRoutes")
const adminRouter = require("./routes/adminRrouter")
const middleware = require("./middlewares/index")
const logger = require("./utils/logger")
const openRouter = require("./routes/publicRoutes")
const swaggerUi = require("swagger-ui-express")
const swaggerSpec = require("./utils/swagger")

const app = express()
connectToDataBase()

app.get("/", (request, response) => {
  // TODO: Serve the static frontend application files
  response.send("Welcome to EventEase!")
})

app.use(cors())
app.use(express.json())
app.use(logger.requestIdLogger)
app.use(logger.morganLogger)
app.use(logger.requestTimingLogger)

const options = {
  explorer: true
};


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, options)) // swagger UI
app.use("/api/public", openRouter) // open public routes
app.use("/api/auth", authRouter)
app.use("/api/users", validateToken, usersRouter)
app.use("/api/events", validateToken, eventsRouter)
app.use("/api/rsvp", validateToken, rsvpRouter)
app.use("/api/admin", validateToken, adminRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
