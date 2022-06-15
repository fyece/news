import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

import userReducer from "./user/user.slice"
import articleReducer from "./article/article.slice"
import commentReducer from "./comment/comment.slice"
import authReducer from "./auth/auth.slice"

const rootReducer = combineReducers({
  userReducer,
  articleReducer,
  commentReducer,
  authReducer,
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReducer"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
  return configureStore({
    // reducer: rootReducer,
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]

const store = setupStore()
export default store

export const persistor = persistStore(store)
