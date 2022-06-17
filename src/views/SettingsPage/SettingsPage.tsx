import React from "react"
import { ArrowBack } from "@mui/icons-material"
import { Box, Button, Paper, Stack } from "@mui/material"

import SettingsForm from "../../components/forms/SettingsForm/SettingsForm"
import NavLinkStyled from "../../components/common/NavLinkStyled/NavLinkStyled"

const SettingsPage = () => {
  return (
    <Paper elevation={0}>
      <Box p={2}>
        <Stack spacing={2}>
          <NavLinkStyled to="/profile">
            <Button variant="text" startIcon={<ArrowBack />}>
              Профиль
            </Button>
          </NavLinkStyled>
          <SettingsForm />
        </Stack>
      </Box>
    </Paper>
  )
}

export default SettingsPage
