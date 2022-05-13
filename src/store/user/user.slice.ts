import { IUser } from "./../../types/IUser"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchUsers } from "./user.actions"

interface IUserState {
  users: IUser[]
  isLoading: boolean
  error: string
}

const initialState: IUserState = {
  users: [],
  isLoading: false,
  error: "",
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false
      state.error = ""
      state.users = action.payload
    },
    [fetchUsers.pending.type]: (state, action) => {
      state.isLoading = true
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

const userReducer = userSlice.reducer

export default userReducer
