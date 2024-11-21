const usersRouter = require("express").Router()
const User = require("../models/user")

usersRouter.get("/profile", async (req, res) => {
  try {
    const id = req.user.id
    const user = await User.findById(id).select("-password")

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
})

usersRouter.put("/profile", async (req, res) => {
  try {
    const id = req.user.id
    const { name, email, phone, roles } = req.body

    if (!name && !email && !phone && !roles) {
      return res
        .status(400)
        .json({ error: "At least one field (name, email, phone, roles) is required" })
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, phone, roles },
      { new: true, runValidators: true }
    ).select("-password")

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" })
    }

    res
      .status(200)
      .json({ message: "Profile updated successfully", user: updatedUser })
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ error: "Internal server error" })
  }
})

module.exports = usersRouter
