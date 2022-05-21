import React, { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Modal } from "@mui/material"
import LoginForm from "../forms/LoginForm/LoginForm"
import RegisterForm from "../forms/RegisterForm/RegisterForm"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

const LoginButton = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [toRegister, setToRegister] = useState(false)
  return (
    <div>
      <Button onClick={handleOpen} variant="text" sx={{ color: "#ffffff" }}>
        Войти
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {toRegister ? (
            <RegisterForm toLogin={() => setToRegister(false)} />
          ) : (
            <LoginForm toRegister={() => setToRegister(true)} />
          )}
        </Box>
      </Modal>
    </div>
  )
}

export default LoginButton
