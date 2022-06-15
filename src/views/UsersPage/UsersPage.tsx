import React from "react"
import { Box, Paper, Typography } from "@mui/material"

import UsersList from "../../components/UsersList/UsersList"

const UsersPage = () => {
  return (
    <Box sx={{ minWidth: "640px" }}>
      <Paper elevation={0}>
        <UsersList />
      </Paper>
    </Box>
  )
}

export default UsersPage
