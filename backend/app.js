const express = require("express")
const connectToDataBase = require("./utils/database")
const authRouter = require("./controllers/authController")
const usersRouter = require("./controllers/usersController")
const { validateToken, checkRoles } = require("./middlewares")

const app = express()

connectToDataBase()

app.get("/", (request, response) => {
  response.send("hello world")
})

app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/users", validateToken, checkRoles("User", "Organizer"), usersRouter)

module.exports = app
