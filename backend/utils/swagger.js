const swaggerJSDoc = require("swagger-jsdoc")
const adminDocs = require("../docs/admin.docs")
const authDocs = require("../docs/auth.docs")
const eventsDocs = require("../docs/events.docs")
const publicDocs = require("../docs/public.docs")
const rsvpDocs = require("../docs/rsvp.docs")
const userDocs = require("../docs/user.docs")

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "EventEase API",
    version: "1.0.0",
    description: "API Documentation for EventEase",
  },
  servers: [
    {
      url: "http://localhost:5000/api",
      description: "Local Server",
    },
    {
      url: "https://eventease-s37i.onrender.com/api",
      description: "Production Server",
    },
  ],
}

const swaggerDocs = {
  ...adminDocs.paths,
  ...authDocs.paths,
  ...eventsDocs.paths,
  ...publicDocs.paths,
  ...rsvpDocs.paths,
  ...userDocs.paths,
}

const swaggerSpec = swaggerJSDoc({
  definition: swaggerDefinition,
  apis: [],
})

swaggerSpec.paths = swaggerDocs

module.exports = swaggerSpec
