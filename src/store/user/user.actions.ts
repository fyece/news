import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
    }
  }
)
