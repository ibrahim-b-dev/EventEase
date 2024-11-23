const RSVP = require("../models/rsvp")

const createRSVP = async (req, res) => {
  const { userID, eventID, RSVP_Status, attendeesCount } = req.body

  if (!userID || !eventID || !RSVP_Status) {
    return res
      .status(400)
      .json({ error: "userID, eventID, and RSVP_Status are required" })
  }

  const newRSVP = new RSVP({
    userID,
    eventID,
    RSVP_Status,
    attendeesCount: attendeesCount || 1,
  })

  await newRSVP.save()

  res.status(201).json({ message: "RSVP created successfully", newRSVP })
}

const getRSVP = async (req, res) => {
  const { userId, eventId } = req.query

  const rsvps = await RSVP.find({
    $or: [{ userId }, { eventId }],
  })

  if (!rsvp.length) {
    return res.status(404).json({ error: "RSVP not found" })
  }

  res.status(200).json(rsvps)
}

const deleteRSVP = async (req, res) => {
  const { id } = req.params

  const deletedRSVP = await RSVP.findByIdAndDelete(id)

  if (!deletedRSVP) {
    return res.status(404).json({ error: "RSVP not found" })
  }

  res.status(200).json({ message: "RSVP deleted successfully", deletedRSVP })
}

module.exports = {
  createRSVP,
  getRSVP,
  deleteRSVP,
}
