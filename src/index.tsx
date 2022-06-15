import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { CookiesProvider } from "react-cookie"
import { PersistGate } from "redux-persist/integration/react"
// import { ThemeProvider } from "@emotion/react"

import App from "./App"
import store, { persistor } from "./store/store"
import { BrowserRouter } from "react-router-dom"
// import theme from "./theme"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </CookiesProvider>
)
