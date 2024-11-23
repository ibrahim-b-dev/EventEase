const mongoose = require("mongoose")
const allowedRoles = require("../utils/allowedRoles")
const { hashPassword, verifyPassword } = require("../utils/passwordUtils")

// A schema defines the structure of collection documents.
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [6, "Name must be at least 6 characters"],
    maxLength: [25, "Name must at most 25 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: {
      validator: (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      },
      message: () => "Email address is not a valid!",
    },
    index: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  roles: {
    type: [String],
    required: true,
    default: ["User"],
    enum: {
      values: allowedRoles,
      message: "Role `{VALUE}` is not valid.",
    },
    validate: {
      validator: function (roles) {
        return roles.length === new Set(roles).size
      },
      message: "Duplicate roles are not allowed.",
    },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  phone: {
    type: String,
    validate: {
      validator: function (phone) {
        return /^\+?[1-9]\d{1,14}$/.test(phone)
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  isActive: { type: Boolean, default: true, index: true },
})

// converts the mongoose document into a plain JavaScript object.
// applies when the document's toJSON method is called.
userSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id.toString()
    delete ret._id
    delete ret.__v
    delete ret.password
  },
  flattenObjectIds: true,
})

// Pre-save middleware for hashing the password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    try {
      this.password = await hashPassword(this.password)
    } catch (error) {
      return next(error)
    }
  }
  next()
})

userSchema.pre("save", function (next) {
  this.updatedAt = new Date()
  next()
})

// Compare password method for authentication
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await verifyPassword(candidatePassword, this.password)
}

// Models take schema and apply it to each document in its collection.
// Models are responsible for all document interactions (CRUD).
const User = mongoose.model("User", userSchema)

module.exports = User
