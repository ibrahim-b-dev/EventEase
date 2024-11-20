const express = require("express")
const connectToDataBase = require("./utils/database")

const app = express()

connectToDataBase()

app.get("/", (request, response) => {
  response.send("hello world")
})

module.exports = app
