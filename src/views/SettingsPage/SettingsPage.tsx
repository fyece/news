import React from "react"
import { ArrowBack } from "@mui/icons-material"
import { Button, Stack } from "@mui/material"

import SettingsForm from "../../components/forms/SettingsForm/SettingsForm"
import NavLinkStyled from "../../components/common/NavLinkStyled/NavLinkStyled"

const SettingsPage = () => {
  return (
    <>
      <Stack spacing={2}>
        <NavLinkStyled to="/profile">
          <Button variant="text" startIcon={<ArrowBack />}>
            Профиль
          </Button>
        </NavLinkStyled>
        <SettingsForm />
      </Stack>
    </>
  )
}

export default SettingsPage
