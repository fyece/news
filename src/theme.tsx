import { createTheme } from "@mui/material"
import { orange, teal } from "@mui/material/colors"

let theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: "#ffffff",
    },
  },
  shape: {
    borderRadius: 6,
  },
  // typography: {
  //   fontSize: 14,
  // },
})

theme = createTheme(theme, {
  palette: {
    myOwnColor: {
      main: orange[500],
    },
  },
})

export default theme
