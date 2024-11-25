const checkRoles = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      const userRole = req.user?.role
            
      if (!userRole || !allowedRoles.includes(userRole)) {
        return res
          .status(403)
          .json({ error: "Access denied. Role not authorized." })
      }

      next()
    } catch (error) {
      return res
        .status(403)
        .json({ error: "Access denied. Authenticate first." })
    }
  }
}

module.exports = checkRoles
