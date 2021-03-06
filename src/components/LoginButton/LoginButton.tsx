import React, { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Modal, styled } from "@mui/material"
import LoginForm from "../forms/LoginForm/LoginForm"
import RegisterForm from "../forms/RegisterForm/RegisterForm"
import { Login } from "@mui/icons-material"
import { useAppDispatch } from "../../utils/hooks/redux"
import { clearError } from "../../store/auth/auth.slice"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  borderRadius: "8px",
  // boxShadow: 24,
  p: 4,
}

// const ModalStyled = styled(Modal)(({ theme }) => ({
//   border: "none",
//   borderRadius: theme.shape.borderRadius,
// }))

const LoginButton = () => {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [toRegister, setToRegister] = useState(false)
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="text"
        endIcon={<Login />}
        sx={{ color: "#ffffff" }}
      >
        Войти
      </Button>
      <Modal
        open={open}
        onClose={() => {
          handleClose()
          dispatch(clearError())
        }}
      >
        <Box sx={style}>
          {toRegister ? (
            <RegisterForm
              toLogin={() => {
                dispatch(clearError())
                setToRegister(false)
              }}
            />
          ) : (
            <LoginForm
              toRegister={() => {
                dispatch(clearError())
                setToRegister(true)
              }}
            />
          )}
        </Box>
      </Modal>
    </div>
  )
}

export default LoginButton
