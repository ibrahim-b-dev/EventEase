import { createSlice } from "@reduxjs/toolkit"
import loginService from "../services/loginService"

const initialState = {
  isLoggedIn: false,
  token: null,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true
      state.error = null
    },
    loginSuccess(state, action) {
      state.loading = false
      state.isLoggedIn = true
      state.token = action.payload.token
    },
    loginFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    registerStart(state) {
      state.loading = true
      state.error = null
    },
    registerSuccess(state, action) {
      state.loading = false
      state.token = action.payload.token
      state.isLoggedIn = true
    },
    registerFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  loginStart,
  loginFailure,
  loginSuccess,
  registerStart,
  registerFailure,
  registerSuccess,
} = authSlice.actions

export const login = (credentials) => {
  return async (dispatch) => {
    dispatch(loginStart())

    try {
      const data = await loginService.login(credentials)
      dispatch(loginSuccess({ user: data.user, token: data.token }))
    } catch (error) {
      dispatch(loginFailure(error?.response?.data?.error || "Unknown error"));
    }
  }
}

export default authSlice.reducer
