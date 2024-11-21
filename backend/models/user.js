const mongoose = require("mongoose")

// A schema defines the structure of collection documents.
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  role: { type: String, required: true, index: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  phone: { type: String },
  isActive: { type: Boolean, default: true, index: true },
})

// converts the mongoose document into a plain JavaScript object.
// applies when the document's toJSON method is called.
userSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id.toString()
    delete ret._id
    delete ret.__v
  },
  flattenObjectIds: true,
})

// Models take schema and apply it to each document in its collection.
// Models are responsible for all document interactions (CRUD).
const User = mongoose.model("User", userSchema)

module.exports = User
