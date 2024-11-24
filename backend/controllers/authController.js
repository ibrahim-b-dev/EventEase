const User = require("../models/user")
const { signToken } = require("../utils/tokenUtils")

const register = async (req, res) => {
  const { name, email, password, phone, roles } = req.body

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "Name, email, and password are required" })
  }

  if (password.length < 6) {
    return res.status(400).json({
      error: "Password must be at least 6 charactters long",
    })
  }

  const existingUser = await User.findOne({ email })
  if (existingUser) {
    return res.status(400).json({ error: "Email already in use" })
  }

  const userRoles = roles || "User"

  const newUser = new User({
    name,
    email,
    password,
    phone,
    roles: userRoles,
  })
  await newUser.save()

  res
    .status(201)
    .json({ message: "User registered successfully", id: newUser._id })
}

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: "Email, and password are required" })
  }

  const user = await User.findOne({ email })
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" })
  }

  const isMatch = await user.comparePassword(password)

  if (isMatch) {
    const token = signToken({ id: user._id, email: user.email })
    return res.status(200).json({ message: "Login successful", token })
  } else {
    return res.status(401).json({ error: "Invalid email or password" })
  }
}

module.exports = { register, login }
