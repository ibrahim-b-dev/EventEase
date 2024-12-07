import client from "./client"

const getAllEvents = async () => {
  try {
    const response = await client.get("/events")
    return response.data
  } catch (error) {
    console.error("Error fetching events:", error)
    throw error
  }
}

const getpopularEvents = async () => {
  try {
    const response = await client.get("/events")
    return response.data
  } catch (error) {
    console.error("Error fetching events:", error)
    throw error
  }
}

export default {
  getAllEvents, getpopularEvents
}
