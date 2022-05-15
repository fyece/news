import React from "react"
import { Avatar, Button, Menu, MenuItem } from "@mui/material"
import avatar from "../../assets/thumbnail/avatarKitty.jpg"

const isLogined = true

function AppbarMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      {isLogined ? (
        <Avatar src={avatar} onClick={handleClick} />
      ) : (
        <Button>Войти</Button>
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
        <MenuItem>Профиль</MenuItem>
        <MenuItem>Закладки</MenuItem>
        <MenuItem>Настройки</MenuItem>
        <MenuItem>Выход</MenuItem>
      </Menu>
    </>
  )
}

export default AppbarMenu
