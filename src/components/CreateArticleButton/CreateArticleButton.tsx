import React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { Add } from "@mui/icons-material"
import { NavLink } from "react-router-dom"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
}

const CreateArticleButton = () => {
  return (
    <Box>
      <NavLink to="/editor">
        <Button
          color="secondary"
          variant="contained"
          startIcon={<Add />}
          disableElevation
          sx={{ color: "#000000", backgroundColor: "#fff" }}
        >
          Создать
        </Button>
      </NavLink>
    </Box>
  )
}

export default CreateArticleButton
