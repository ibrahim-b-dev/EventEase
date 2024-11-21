const authRouter = require("express").Router()
const User = require("../models/user")
const { hashPassword, verifyPassword } = require("../utils/passwordUtils")
const { sign } = require("../utils/tokenUtils")

authRouter.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "Name, email, and password are required" })
    }

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" })
    }

    const userRole = role || "Attendee"
    const hashedPassword = await hashPassword(password)

    const newUser = new User({ name, email, password: hashedPassword, role: userRole })
    await newUser.save()

    res
      .status(201)
      .json({ message: "User registered successfully", id: newUser._id })
  } catch (error) {
    console.error("Error during registration:", error)
    res.status(500).json({ error: "An error occurred during registration" })
  }
})

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: "Email, and password are required" })
    }

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" })
    }

    const passwordCorrect = await verifyPassword(password, user.password)
    if (!passwordCorrect) {
      return res.status(401).json({ error: "Invalid email or password" })
    }

    const token = sign({ id: user._id, email: user.email })

    res.status(200).json({ message: "Login successful", token })
  } catch (error) {
    res.status(500).json({ error: "Login failed" })
  }
})

module.exports = authRouter
