import { PaletteMode, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/system"
import React from "react"
import { setThemeMode } from "../../store/app/app.slice"
import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux"

interface IThemeWrapperProps {
  children: React.ReactNode
}

const ThemeWrapper: React.FC<IThemeWrapperProps> = ({ children }) => {
  const mode = useAppSelector((state) => state.appReducer.themeMode)
  const darkTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#6756ff",
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

  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
}

export default ThemeWrapper
