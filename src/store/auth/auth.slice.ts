import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IResponseUser } from "../../types/types"
import { register, login, getMe, updateMe } from "./auth.actions"

interface IAuthState {
  user: IResponseUser | null
  isLoading: boolean
  error: string
}

const initialState: IAuthState = {
  user: null,
  isLoading: false,
  error: "",
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state: IAuthState) {
      state.user = null
    },
  },
  extraReducers: {
    [register.fulfilled.type]: (
      state,
      action: PayloadAction<IResponseUser>
    ) => {
      state.user = action.payload
      state.isLoading = false
      state.error = ""
    },
    [register.pending.type]: (state) => {
      state.isLoading = true
    },
    [register.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = true
      state.error = action.payload
    },

    [login.fulfilled.type]: (state, action: PayloadAction<IResponseUser>) => {
      state.user = action.payload
      state.isLoading = false
      state.error = ""
    },
    [login.pending.type]: (state) => {
      state.isLoading = true
    },
    [login.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = true
      state.error = action.payload
    },

    [getMe.fulfilled.type]: (state, action: PayloadAction<IResponseUser>) => {
      state.user = action.payload
      state.isLoading = false
      state.error = ""
    },
    [getMe.pending.type]: (state) => {
      state.isLoading = true
    },
    [getMe.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = true
      state.error = action.payload
    },

    [updateMe.fulfilled.type]: (
      state,
      action: PayloadAction<IResponseUser>
    ) => {
      if (state.user) {
        state.user.fullName = action.payload.fullName
        state.user.bio = action.payload.bio
      }
      state.isLoading = false
      state.error = ""
    },
    [updateMe.pending.type]: (state) => {
      state.isLoading = true
    },
    [updateMe.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = true
      state.error = action.payload
    },
  },
})

export const { logout } = authSlice.actions
const authReducer = authSlice.reducer

export default authReducer
