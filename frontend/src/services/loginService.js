import client from "./client"

const login = async (credentials) => {
  const request = await client.post("/auth/login", credentials)
  return request.data
}

const register = async (credentials) => {
  const request = await client.post("/auth/register", credentials)
  return request.data
}

export default { login, register }
