import React from "react"
import { Stack, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import { link } from "fs"

interface InitialProps {
  icon?: any
  children: React.ReactNode
  linkto?: string
}

function NavigationItem({ children: Element, linkto, icon }: InitialProps) {
  return (
    // <NavLink
    //   to={linkto}
    //   className={(navData) => (navData.isActive ? "activeLink" : "none")}
    // >
    <Stack direction="row" spacing={1}>
      {icon}
      <Typography>{Element}</Typography>
    </Stack>
    // </NavLink>
  )
}

export default NavigationItem
