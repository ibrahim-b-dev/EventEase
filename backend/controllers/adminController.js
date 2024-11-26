const User = require("../models/user")

const createUser = async (req, res, next) => {
  const { name, email, password, phone, role } = req.body

  const existingUser = await User.findOne({ email })
  if (existingUser) {
    return res.status(400).json({ error: "Email already in use" })
  }

  const newUser = new User({
    name,
    email,
    password,
    phone,
    role,
  })
  await newUser.save()

  res
    .status(201)
    .json({ message: "User registered successfully", id: newUser._id })
}

const getAllUsers = async (req, res, next) => {
  const users = await User.find({})
  if (!users.length) {
    return res.status(404).json({ error: "No users found" })
  }
  res.status(200).json(users)
}

const getUser = async (req, res, next) => {
  const { id } = req.params
  const user = await User.findById(id)

  if (!user) {
    return res.status(404).json({ error: "User not found" })
  }

  res.status(200).json(user)
}

const updateUser = async (req, res, next) => {
  const { id } = req.params
  const updates = req.body

  if (!Object.keys(updates).length) {
    return res.status(400).json({ error: "No updates provided" })
  }

  const updatedUser = await User.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  })

  if (!updatedUser) {
    return res.status(404).json({ error: "User not found" })
  }

  res.status(200).json({ message: "User updated successfully", updatedUser })
}

const deleteUser = async (req, res, next) => {
  const { id } = req.params

  const deletedUser = await User.findByIdAndDelete(id)

  if (!deletedUser) {
    return res.status(404).json({ error: "User not found" })
  }

  res.status(200).json({ message: "User deleted successfully", deletedUser })
}

module.exports = {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser
}
