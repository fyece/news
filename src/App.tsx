import React, { useState } from "react"
import ArticleList from "./components/layout/ArticlesList/ArticleList"
import Appbar from "./components/layout/Appbar/Appbar"
import {
  Box,
  createTheme,
  Grid,
  PaletteMode,
  ThemeProvider,
} from "@mui/material"
import Navbar from "./components/layout/Navbar/Navbar"
import Rightbar from "./components/layout/Rightbar/Rightbar"

const App = () => {
  const [mode, setMode] = useState<PaletteMode>("dark")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
    shape: {
      borderRadius: 6,
    },
    // typography: {
    //   fontSize: 14,
    // },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Appbar />
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Navbar mode={mode} setMode={setMode} />
          </Grid>
          {/* choose between 5 and 6 grid size */}
          <Grid item xs={5}>
            <ArticleList />
          </Grid>
          <Grid item xs={3}>
            {/* some content */}
            <Rightbar />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default App
