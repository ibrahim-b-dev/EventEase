import client from "./client"

export const getPopularEvents = async () => {
  try {
    const response = await client.get(
      "/public/popular-events?sortBy=popularity&order=desc"
    )
    return response.data
  } catch (error) {
    console.error("Error fetching events:", error)
    throw error
  }
}
