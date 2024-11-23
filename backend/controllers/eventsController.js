const Event = require("../models/event")

const addEvent = async (req, res) => {
  const {
    title,
    description,
    date: eventDateTime,
    location,
    capacity,
    ticketPricing,
    categories,
  } = req.body

  if (
    !title ||
    !description ||
    !eventDateTime ||
    !location ||
    !capacity ||
    !categories?.length
  ) {
    return res.status(400).json({
      error: "All fields (including capacity and categories) are required.",
    })
  }

  if (!req.user?.roles?.includes("Organizer")) {
    return res
      .status(403)
      .json({ error: "Access denied. Only Organizers can add events." })
  }

  const newEvent = new Event({
    title,
    description,
    eventDateTime: new Date(eventDateTime),
    location,
    organizerID: req.user.id,
    location,
    capacity,
    ticketPricing: ticketPricing || { price: 0 },
    categories,
  })

  const savedEvent = await newEvent.save()
  res.status(201).json({
    message: "Event created successfully.",
    event: savedEvent,
  })
}

const getAllEvents = async (req, res) => {
  const events = await Event.find()
    .populate("organizerID", "name email") // Populate organizer details
    .select("-__v")
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
      .json({ error: "You are not authorized to delete this event" })
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

module.exports = { addEvent, getAllEvents, getEvent, updateEvent, deleteEvent }
