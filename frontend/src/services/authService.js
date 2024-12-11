import client from "./client"

const login = async (credentials) => {
  const response = await client.post("/auth/login", credentials)
  return response.data
}

const register = async (credentials) => {
  const response = await client.post("/auth/register", credentials)
  return response.data
}

export default { login, register }
