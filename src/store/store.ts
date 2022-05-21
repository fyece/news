import { articleApi } from "../services/article.service"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userReducer from "./user/user.slice"
import articleReducer from "./article/article.slice"

const rootReducer = combineReducers({
  userReducer,
  // articleReducer,
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
