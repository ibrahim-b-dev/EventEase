const Event = require("../models/event")
const RSVP = require("../models/rsvp")

const addEvent = async (req, res) => {
  const {
    title,
    description,
    eventDateTime,
    location,
    capacity,
    ticketPricing,
    categories,
  } = req.body

  const newEvent = new Event({
    title,
    description,
    eventDateTime: new Date(eventDateTime),
    location,
    organizerID: req.user.id,
    location,
    capacity,
    ticketPricing: ticketPricing || 0,
    categories,
  })

  const savedEvent = await newEvent.save()
  res.status(201).json({
    message: "Event created successfully.",
    event: savedEvent,
  })
}

const getAllEvents = async (req, res) => {
  const { startDate, endDate, location, organizer } = req.query
  const { sortBy = "eventDateTime", order = "asc" } = req.query

  const validSortAttributes = ["eventDateTime", "popularity"]
  if (!validSortAttributes.includes(sortBy)) {
    return res.status(400).json({ error: `Invalid sortBy field: ${sortBy}` })
  }

  const sortOrder = order === "desc" ? -1 : 1
  const filters = {}

  if (startDate || endDate) {
    filters.eventDateTime = {}
    if (startDate) filters.eventDateTime.$gte = new Date(startDate)
    if (endDate) filters.eventDateTime.$lte = new Date(endDate)
  }

  if (location) {
    filters.location = { $regex: new RegExp(location, "i") }
  }

  const events = await Event.find(filters)
    .populate("organizerID", "name email")
    .populate("popularity")
    .sort({ [sortBy]: sortOrder })
    .exec()

  res.status(200).json(events)
}

const getEvent = async (req, res) => {
  const { id } = req.params
  const event = await Event.findById(id).populate("organizerID", "name email")

  if (!event) {
    return res.status(404).json({ error: "Event not found" })
  }

  res.status(200).json(event)
}

const getEventRSVPs = async (req, res) => {
  const { id } = req.params

  const event = await Event.findById(id)
  if (!event) {
    return res.status(404).json({ error: "Event not found" })
  }

  const rsvps = await RSVP.find({ eventID: id }).populate(
    "userID",
    "name email"
  )

  res.status(200).json({
    message: `RSVPs for event: ${event.title}`,
    eventId: id,
    rsvps,
  })
}

const updateEvent = async (req, res) => {
  const { id } = req.params
  const userId = req.user.id
  const updates = req.body

  const event = await Event.findById(id)

  if (!event) {
    return res.status(404).json({ error: "Event not found" })
  }

  if (event.organizerID.toString() !== userId) {
    return res
      .status(403)
      .json({ error: "You are not authorized to update this event" })
  }

  const updatedEvent = await Event.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  })

  res.status(200).json(updatedEvent)
}

const deleteEvent = async (req, res) => {
  const { id } = req.params
  const userId = req.user.id
  const event = await Event.findById(id)

  if (!event) {
    return res.status(404).json({ error: "Event not found" })
  }

  if (event.organizerID.toString() !== userId) {
    return res
      .status(403)
      .json({ error: "You are not authorized to delete this event" })
  }

  const deletedEvent = await Event.findByIdAndDelete(id)

  res.status(200).json({ message: "Event deleted successfully", deletedEvent })
}

module.exports = {
  addEvent,
  getAllEvents,
  getEvent,
  getEventRSVPs,
  updateEvent,
  deleteEvent,
}
