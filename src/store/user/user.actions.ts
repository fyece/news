import { createAsyncThunk } from "@reduxjs/toolkit"

import { UserApi } from "../../utils/api/user.api"

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (_, thunkAPI) => {
    try {
      const data = await UserApi.getUsers()
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
    }
  }
)

export const getUserById = createAsyncThunk(
  "user/getUserById",
  async (id: number, thunkAPI) => {
    try {
      const data = await UserApi.getUserById(id)
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователя")
    }
  }
)
