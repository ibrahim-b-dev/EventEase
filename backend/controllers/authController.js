const User = require("../models/user")
const { signToken } = require("../utils/tokenUtils")

const register = async (req, res) => {
  const { name, email, password, phone, role } = req.body

  const existingUser = await User.findOne({ email })
  if (existingUser) {
    return res.status(400).json({ error: "Email already in use" })
  }

  const userRole = role || "User"

  if (userRole === "Admin") {
    return res
      .status(403)
      .json({ error: "You are not authorized to assign the Admin role." })
  }

  const newUser = new User({
    name,
    email,
    password,
    phone,
    role: userRole,
  })
  await newUser.save()

  res
    .status(201)
  await newUser.save()
    .json({ message: "User registered successfully", user: newUser })
}

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: "Email, and password are required" })
  }

  const user = await User.findOne({ email })
    .populate()
    .select("-createdAt -updatedAt")

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" })
  }

  const isMatch = await user.comparePassword(password)
  if (isMatch) {
    const token = signToken({ id: user._id, email: user.email })
    return res.status(200).json({ message: "Login successful", token, user })
  } else {
    return res.status(401).json({ error: "Invalid email or password" })
  }
}

module.exports = { register, login }
