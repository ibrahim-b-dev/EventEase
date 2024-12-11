import { createSlice } from "@reduxjs/toolkit"
import userService from "../services/userService"

const initialState = {
  user: null,
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoading(state) {
      state.loading = true
      state.error = null
    },
    userSuccess(state, action) {
      state.loading = false
      state.user = action.payload
    },
    userFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    clearUser(state) {
      state.user = null
      state.loading = false
      state.error = null
    },
  },
})

export const { userLoading, userSuccess, userFailure, clearUser } =
  userSlice.actions

export default userSlice.reducer

export const fetchUserData = () => async (dispatch, getState) => {
  dispatch(userLoading())

  const token = getState().auth.token

  try {
    const userData = await userService.fetchUser(token)
    dispatch(userSuccess(userData))
  } catch (error) {
    dispatch(userFailure(error?.response?.data?.error || "Unknown error"))
  }
}

export const clearUserData = () => async (dispatch) => {
  dispatch(clearUser())
}
