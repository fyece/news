import React from "react"
import { Avatar, Button, Menu, MenuItem } from "@mui/material"
import LoginButton from "../LoginButton/LoginButton"
import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux"
import NavLinkStyled from "../common/NavLinkStyled/NavLinkStyled"
import { logout } from "../../store/auth/auth.slice"
import AvatarColored from "../common/AvatarColored/AvatarColored"

function AppbarMenu() {
  const userData = useAppSelector((state) => state.authReducer.user) || null
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const dispatch = useAppDispatch()
  const onLogout = () => {
    dispatch(logout())
    setAnchorEl(null)
  }

  return (
    <>
      {userData && userData.fullName ? (
        <AvatarColored
          fullName={userData.fullName}
          onClick={handleClick}
          variant="circular"
        />
      ) : (
        <LoginButton />
      )}
      <Menu
        elevation={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>
          <NavLinkStyled to="/profile">Профиль</NavLinkStyled>
        </MenuItem>
        <MenuItem>
          <NavLinkStyled to="/settings">Настройки</NavLinkStyled>
        </MenuItem>
        <MenuItem onClick={onLogout}>Выход</MenuItem>
      </Menu>
    </>
  )
}

export default AppbarMenu
