const mongoose = require("mongoose")

// A schema defines the structure of collection documents.
const rsvpSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
    validate: {
      validator: async function (value) {
        const User = mongoose.model("User")
        const userExists = await User.exists({ _id: value })
        return userExists
      },
      message: "User does not exist",
    },
  },
  eventID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Event",
    validate: {
      validator: async function (value) {
        const Event = mongoose.model("Event")
        const eventExists = await Event.exists({ _id: value })
        return eventExists
      },
      message: "Event does not exist",
    },
  },
  RSVP_Status: {
    type: String,
    required: true,
    enum: {
      values: ["Yes", "No", "Maybe"],
      message: "RSVP status must be 'Yes', 'No', or 'Maybe'",
    },
    default: "Maybe",
  },
  attendeesCount: {
    type: Number,
    default: 1,
    min: [1, "Number of attendees must be at least 1"],
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

// Pre-save middleware to update the `updatedAt` field.
rsvpSchema.pre("save", function (next) {
  this.updatedAt = new Date()
  next()
})

// Models take schema and apply it to each document in its collection.
// Models are responsible for all document interactions (CRUD).
const RSVP = mongoose.model("RSVP", rsvpSchema)

module.exports = RSVP
