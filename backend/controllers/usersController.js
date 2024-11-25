const User = require("../models/user")

const getProfile = async (req, res) => {
  const id = req.user.id
  const user = await User.findById(id).select("-password")

  if (!user) {
    return res.status(404).json({ error: "User not found" })
  }

  res.status(200).json(user)
}

const setProfile = async (req, res) => {
  const id = req.user.id
  const { name, email, phone } = req.body

  // if (!name && !email && !phone) {
  //   return res.status(400).json({
  //     error: "At least one field (name, email, phone) is required",
  //   })
  // }
  
  const updatedUser = await User.findByIdAndUpdate(
    id,
    { name, email, phone },
    { new: true, runValidators: true }
  ).select("-password")

  if (!updatedUser) {
    return res.status(404).json({ error: "User not found" })
  }

  res
    .status(200)
    .json({ message: "Profile updated successfully", user: updatedUser })
}

module.exports = { getProfile, setProfile }
