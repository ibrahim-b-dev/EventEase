const { rateLimit } = require("express-rate-limit")
const openRouter = require("express").Router()
const {
  getPopularEvents,
  getEventsMetadata,
} = require("../controllers/eventsController")
const { validateQuery } = require("../middlewares/validators")
const { getAllEventsSchema } = require("../schemas")

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
})

openRouter.use(limiter)

openRouter.get(
  "/popular-events",
  validateQuery(getAllEventsSchema),
  getPopularEvents
)

openRouter.get("/popular-events-metadata", getEventsMetadata)

module.exports = openRouter
