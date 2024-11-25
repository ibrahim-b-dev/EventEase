const validateRequest = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body)
  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }
  next()
}

const validateQuery = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.query, { abortEarly: false })

    if (error) {
      return res.status(400).json({
        error: "Invalid query parameters",
        details: error.details.map((detail) => detail.message),
      })
    }

    req.query = value
    next()
  }
}

module.exports = {
  validateRequest,
  // validateBody,
  // validateParams,
  validateQuery,
}
