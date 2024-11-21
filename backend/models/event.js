const mongoose = require("mongoose")

// A schema defines the structure of collection documents.
const eventSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  description: { type: String, required: true },
  date: { type: Date, required: true, index: true },
  location: { type: String, required: true },
  organizerID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true, index: true },
})

// converts the mongoose document into a plain JavaScript object.
// applies when the document's toJSON method is called.
eventSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id.toString()
    delete ret._id
    delete ret.__v
  },
  flattenObjectIds: true,
})

// Models take schema and apply it to each document in its collection.
// Models are responsible for all document interactions (CRUD).
const Event = mongoose.model("Event", eventSchema)

module.exports = Event
