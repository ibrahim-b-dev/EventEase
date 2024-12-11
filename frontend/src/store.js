import { configureStore } from "@reduxjs/toolkit"
import { reducer as notificationsReducer } from "reapop"
import authReducer from "./reducers/authReducer"
import userReducer from "./reducers/userReducer"

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Dispatching action:", action)
  const result = next(action)
  console.log("Updated state:", store.getState())
  return result
}

const store = configureStore({
  reducer: {
    notifications: notificationsReducer(),
    auth: authReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
})

export default store
