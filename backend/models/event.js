const mongoose = require("mongoose")

// A schema defines the structure of collection documents.
const eventSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  description: { type: String, required: true },
  eventDateTime: { type: Date, required: true, index: true },
  location: { type: String, required: true },
  organizerID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  capacity: {
    type: Number,
    required: true,
    min: [1, "Capacity must be at least 1"],
  },
  ticketPricing: {
    price: { type: Number, default: 0, min: [0, "Price cannot be negative"] },
    registrationDeadline: { type: Date },
  },
  categories: {
    type: [String],
    required: true,
    validate: {
      validator: function (value) {
        return value.length > 0
      },
      message: "At least one category is required",
    },
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

// Pre-save middleware to update the `updatedAt` field.
eventSchema.pre("save", function (next) {
  this.updatedAt = new Date()
  next()
})

// Models take schema and apply it to each document in its collection.
// Models are responsible for all document interactions (CRUD).
const Event = mongoose.model("Event", eventSchema)

module.exports = Event
