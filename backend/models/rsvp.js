const mongoose = require("mongoose")

// A schema defines the structure of collection documents.
const rsvpSchema = new mongoose.Schema({
  RSVP_ID: { type: String, required: true, unique: true, index: true },
  userID: { type: String, required: true, ref: "User", index: true }, // Foreign key reference
  eventID: { type: String, required: true, ref: "Event", index: true }, // Foreign key reference
  RSVP_Status: {
    type: String,
    required: true,
    enum: ["Yes", "No", "Maybe"],
    default: "Maybe",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

// Models take schema and apply it to each document in its collection.
// Models are responsible for all document interactions (CRUD).
const RSVP = mongoose.model("RSVP", rsvpSchema)

module.exports = RSVP
