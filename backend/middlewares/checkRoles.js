const checkRoles = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      const userRoles = req.user?.roles

      const hasAccess = userRoles.some((role) => allowedRoles.includes(role))
      if (!userRoles || !hasAccess) {
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