const config = require("./utils/config")
const app = require("./app")
const { logger } = require("./utils/logger")

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
  console.log(`Swagger Docs available at http://localhost:${config.PORT}/api-docs`)
})
