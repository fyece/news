import React from "react"
import { styled, TextField } from "@mui/material"

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800],
}))

const Input = ({ ...props }) => {
  return (
    <>
      <TextFieldStyled
        {...props}
        variant="standard"
        sx={{ p: 1 }}
        InputProps={{
          disableUnderline: true,
        }}
      />
    </>
  )
}

export default Input
