import { articleApi } from "../services/article.service"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userReducer from "./user/user.slice"

const rootReducer = combineReducers({
  userReducer,
  [articleApi.reducerPath]: articleApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(articleApi.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]

const store = setupStore()
export default store
