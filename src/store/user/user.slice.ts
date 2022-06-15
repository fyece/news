import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../types/types"
import { getUserById, getUsers } from "./user.actions"

interface IUserState {
  users: IUser[]
  user: IUser | null
  total: number
  isLoading: boolean
  error: string
}

const initialState: IUserState = {
  users: [],
  user: null,
  total: 0,
  isLoading: false,
  error: "",
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.fulfilled.type]: (
      state,
      action: PayloadAction<{ items: IUser[]; total: number }>
    ) => {
      state.isLoading = false
      state.error = ""
      state.users = action.payload.items
      state.total = action.payload.total
    },
    [getUsers.pending.type]: (state) => {
      state.isLoading = true
    },
    [getUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },

    [getUserById.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false
      state.error = ""
      state.user = action.payload
    },
    [getUserById.pending.type]: (state) => {
      state.isLoading = true
    },
    [getUserById.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

const userReducer = userSlice.reducer

export default userReducer
