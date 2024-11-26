const checkUserActive = (req, res, next) => {
    const user = req.user

    if (!user) {
      return res.status(401).json({ error: "User not authenticated." })
    }

    if (!user.isActive) {
      return res.status(403).json({ error: "User is inactive. Access denied." })
    }

    next()
}

module.exports = checkUserActive
