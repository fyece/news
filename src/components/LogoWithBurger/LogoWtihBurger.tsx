import React from "react"
import logo from "../../assets/navigation/logo.svg"
import burger from "../../assets/navigation/burger.svg"
import { Box } from "@mui/material"
import NavLinkStyled from "../common/NavLinkStyled/NavLinkStyled"

const LogoWithBurger = () => {
  return (
    <NavLinkStyled to="/">
      <Box display={"flex"} flexDirection={"row"}>
        {/* margin 1 or 0 */}
        <Box marginLeft={1}>
          <img src={burger} alt="menu" width={26} height={20} />
        </Box>
        <Box marginLeft={2}>
          <img src={logo} alt="Articla" width={78} height={19} />
        </Box>
      </Box>
    </NavLinkStyled>
  )
}

export default LogoWithBurger
