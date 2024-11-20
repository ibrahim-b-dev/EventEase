const mongoose = require("mongoose")

// A schema defines the structure of collection documents.
const eventSchema = new mongoose.Schema({
  eventID: { type: String, required: true, unique: true, index: true },
  title: { type: String, required: true, index: true },
  description: { type: String, required: true },
  date: { type: Date, required: true, index: true },
  location: { type: String, required: true },
  organizerID: { type: String, required: true, ref: 'User', index: true }, // Foreign key reference
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true, index: true },
});

// Models take schema and apply it to each document in its collection.
// Models are responsible for all document interactions (CRUD).
const Event = mongoose.model("Event", eventSchema)

module.exports = Event
