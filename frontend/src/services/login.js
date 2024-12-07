import axios from "axios"
const baseUrl = "/api/"

const login = async (credentials) => {
  const loginUrl = `${baseUrl}login`
  const request = await axios.post(loginUrl, credentials)
  return request.data
}

const register = async (credentials) => {
  const registerUrl = `${baseUrl}login`
  const request = await axios.post(registerUrl, credentials)
  return request.data
}

export default { login, register }
