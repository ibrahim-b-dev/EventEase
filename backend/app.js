const express = require("express")
const connectToDataBase = require("./utils/database")
const authRouter = require("./controllers/authController")

const app = express()

connectToDataBase()

app.get("/", (request, response) => {
  response.send("hello world")
})

app.use(express.json())
app.use("/api/auth", authRouter)

module.exports = app
