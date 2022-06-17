import React, { useEffect, useState } from "react"
import Appbar from "./components/layout/Appbar/Appbar"
import {
  Box,
  Container,
  createTheme,
  Grid,
  PaletteMode,
  ThemeProvider,
} from "@mui/material"
import Navbar from "./components/layout/Navbar/Navbar"
import Rightbar from "./components/layout/Rightbar/Rightbar"
import ArticlesPage from "./views/ArticlesPage/ArticlesPage"
import ArticlePage from "./views/ArticlePage/ArticlePage"
import UserPage from "./views/UserPage/UserPage"
import UsersPage from "./views/UsersPage/UsersPage"
import SettingsPage from "./views/SettingsPage/SettingsPage"
import { Navigate, Route, Routes } from "react-router"
import EditorPage from "./views/EditorPage/EditorPage"
import { useAppDispatch, useAppSelector } from "./utils/hooks/redux"
import { useCookies } from "react-cookie"
import ProfilePage from "./views/ProfilePage/ProfilePage"
import AuthorizationProtect from "./components/routing/AuthorizationProtect/AuthorizationProtect"

const App = () => {
  const [mode, setMode] = useState<PaletteMode>("light")

  const [cookies, setCookie] = useCookies(["token"])
  const userData = useAppSelector((state) => state.authReducer.user)
  useEffect(() => {
    setCookie("token", userData?.token, {
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
    })
  }, [userData?.token, setCookie, cookies.token])

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        // main: "#7995ba",
        main: "#6b7d95",
      },
      secondary: {
        main: "#ffffff",
      },
      background: {
        default: mode === "light" ? "#efefef" : "#121212",
        paper: mode === "light" ? "#ffffff" : "#232323",
      },
    },
    typography: {
      button: {
        textTransform: "none",
      },
    },
    shape: {
      borderRadius: 8,
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        sx={{ minHeight: "100vh" }}
      >
        <Appbar />
        <Grid container spacing={2}>
          <Grid item xs={2} minWidth={"260px"}>
            <Navbar mode={mode} setMode={setMode} />
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box p={2}>
              <Routes>
                <Route path="/" element={<Navigate to="/articles" />} />
                <Route path="/articles" element={<ArticlesPage />} />
                <Route path="/articles/:id" element={<ArticlePage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route
                  path="/profile"
                  element={
                    <AuthorizationProtect>
                      <ProfilePage />
                    </AuthorizationProtect>
                  }
                />
                <Route path="/users/*" element={<UserPage />} />
                <Route
                  path="/settings"
                  element={
                    <AuthorizationProtect>
                      <SettingsPage />
                    </AuthorizationProtect>
                  }
                />
                <Route
                  path="/editor/:id"
                  element={
                    <AuthorizationProtect>
                      <EditorPage />
                    </AuthorizationProtect>
                  }
                />
                <Route
                  path="/editor"
                  element={
                    <AuthorizationProtect>
                      <EditorPage />
                    </AuthorizationProtect>
                  }
                />
              </Routes>
            </Box>
          </Grid>
          <Grid item xs={0}>
            <Rightbar />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default App
