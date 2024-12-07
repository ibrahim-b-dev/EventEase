import axios from "axios"

const client = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
  // timeout: 1000,
  // withCredentials: true
})

client.interceptors.request.use(
  (config) => {
    console.log("Request:", {
      method: config.method.toUpperCase(),
      url: config.baseURL + config.url,
      headers: config.headers,
      data: config.data,
      params: config.params,
    })

    return config
  },
  (error) => {
    console.error("Request Error:", error.message)
    return Promise.reject(error)
  }
)

client.interceptors.response.use(
  (response) => {
    console.log("Response:", {
      status: response.status,
      data: response.data,
    })
    return response
  },
  (error) => {
    console.error(
      "Response Error:",
      error.response ? error.response.data : error.message
    )
    return Promise.reject(error)
  }
)

export default client
