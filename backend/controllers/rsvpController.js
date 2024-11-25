const RSVP = require("../models/rsvp")

const createRSVP = async (req, res) => {
  const { eventID, RSVP_Status, attendeesCount } = req.body
  const userID = req.user?._id

  if (!userID) {
    return res.status(401).json({ error: "Authentication required" })
  }

  const existingRSVP = await RSVP.findOne({ userID, eventID })
  if (existingRSVP) {
    return res
      .status(400)
      .json({ error: "User has already RSVP'd for this event" })
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

const getUserRSVP = async (req, res) => {
  const userID = req.user?._id

  if (!userID) {
    return res.status(401).json({ error: "Authentication required" })
  }

  const rsvps = await RSVP.find({ userID })
    .populate("eventID", "title eventDateTime location")
    .populate("userID", "name email")

  if (!rsvps.length) {
    return res.status(404).json({ error: "No RSVPs found for this user" })
  }

  res.status(200).json(rsvps)
}

const deleteUserRSVP = async (req, res) => {
  const { id } = req.params
  const userID = req.user?._id

  if (!userID) {
    return res.status(401).json({ error: "Authentication required" })
  }

  const rsvp = await RSVP.findById(id)
  if (!rsvp) {
    return res.status(404).json({ error: "RSVP not found" })
  }

  if (rsvp.userID.toString() !== userID.toString()) {
    return res
      .status(403)
      .json({ error: "You are not authorized to delete this RSVP" })
  }

  await rsvp.deleteOne()

  res
    .status(404)
    .json({ message: "RSVP deleted successfully", deletedRSVP: rsvp })
}

module.exports = {
  createRSVP,
  getUserRSVP,
  deleteUserRSVP,
}
