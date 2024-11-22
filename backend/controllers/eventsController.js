const Event = require("../models/event")
const logger = require("../utils/logger")

const addEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body

    if (!title || !description || !date || !location) {
      return res.status(400).json({ error: "All fields are required." })
    }

    if (!req.user?.roles?.includes("Organizer")) {
      return res
        .status(403)
        .json({ error: "Access denied. Only Organizers can add events." })
    }

    const newEvent = new Event({
      title,
      description,
      date,
      location,
      organizerID: req.user.id,
    })

    const savedEvent = await newEvent.save()
    res.status(201).json({
      message: "Event created successfully.",
      event: savedEvent,
    })
  } catch (error) {
    logger.error("Error creating event:", error)
    res.status(500).json({ error: "Internal server error." })
  }
}

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find()
    res.status(200).json(events)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch events" })
  }
}

const getEvent = async (req, res) => {
  try {
    const { id } = req.params
    const event = await Event.findById(id)

    if (!event) {
      return res.status(404).json({ error: "Event not found" })
    }

    res.status(200).json(event)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch events" })
  }
}

const updateEvent = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ error: "Failed to update event" })
  }
}

const deleteEvent = async (req, res) => {
  try {
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

    res
      .status(200)
      .json({ message: "Event deleted successfully", deletedEvent })
  } catch (error) {
    res.status(500).json({ error: "Failed to delete event" })
  }
}

module.exports = { addEvent, getAllEvents, getEvent, updateEvent, deleteEvent }
