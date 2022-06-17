import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type ThemeMode = "light" | "dark"

interface IAppState {
  themeMode: ThemeMode
}

const initialState: IAppState = {
  themeMode: "light",
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setThemeMode(state: IAppState, action: PayloadAction<ThemeMode>) {
      state.themeMode = action.payload
    },
  },
})

export const { setThemeMode } = appSlice.actions
const appReducer = appSlice.reducer

export default appReducer
