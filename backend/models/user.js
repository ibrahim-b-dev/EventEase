const mongoose = require("mongoose")

// A schema defines the structure of collection documents.
const userSchema = new mongoose.Schema({
  userID: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  role: { type: String, required: true, index: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  phone: { type: String },
  isActive: { type: Boolean, default: true, index: true },
});

// Models take schema and apply it to each document in its collection.
// Models are responsible for all document interactions (CRUD).
const User = mongoose.model("User", userSchema)

module.exports = User
