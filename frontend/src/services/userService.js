import client from "./client"

const fetchUser = async (token) => {
  const response = await client.get("/users/profile")
  return response.data
}

const setUser = async (token, profile) => {
  const response = await client.put("/users/profile", profile)
  return response.data
}

export default { fetchUser, setUser }
