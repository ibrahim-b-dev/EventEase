import client from "./client"

const getAllEvents = async () => {
  const response = await client.get("/events")
  return response.data
}

const getpopularEvents = async () => {
  const response = await client.get("/events")
  return response.data
}

export default {
  getAllEvents,
  getpopularEvents,
}
