import { createAsyncThunk } from "@reduxjs/toolkit"
import {
  ICreateUserDto,
  ILoginUserDto,
  IUpdateUserDto,
} from "../../types/types"
import { AuthApi } from "../../utils/api/auth.api"

export const login = createAsyncThunk(
  "auth/login",
  async (dto: ILoginUserDto, thunkAPI) => {
    try {
      const userData = await AuthApi.login(dto)
      return userData
    } catch (e) {
      return thunkAPI.rejectWithValue("Неверный email или пароль")
    }
  }
)

export const register = createAsyncThunk(
  "auth/register",
  async (dto: ICreateUserDto, thunkAPI) => {
    try {
      const userData = await AuthApi.register(dto)
      return userData
    } catch (e) {
      return thunkAPI.rejectWithValue(
        "Пользователь с таким email уже существует"
      )
    }
  }
)

export const getMe = createAsyncThunk(
  "auth/getMe",
  async (token: string, thunkAPI) => {
    try {
      const userData = await AuthApi.getMe(token)
      return userData
    } catch (e) {
      return thunkAPI.rejectWithValue(
        "Не удалось идентифицировать пользователя"
      )
    }
  }
)

export const updateMe = createAsyncThunk(
  "auth/updateMe",
  async ([token, dto]: [string, IUpdateUserDto], thunkAPI) => {
    try {
      const userData = await AuthApi.updateMe(token, dto)
      return userData
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось обновить профиль")
    }
  }
)
