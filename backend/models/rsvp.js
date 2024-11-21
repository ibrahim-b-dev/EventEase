const mongoose = require("mongoose")

// A schema defines the structure of collection documents.
const rsvpSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  eventID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Event",
  },
  RSVP_Status: {
    type: String,
    required: true,
    enum: ["Yes", "No", "Maybe"],
    default: "Maybe",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

// converts the mongoose document into a plain JavaScript object.
// applies when the document's toJSON method is called.
rsvpSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id.toString()
    delete ret._id
    delete ret.__v
  },
  flattenObjectIds: true,
})

// Models take schema and apply it to each document in its collection.
// Models are responsible for all document interactions (CRUD).
const RSVP = mongoose.model("RSVP", rsvpSchema)

module.exports = RSVP
