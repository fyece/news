import React from "react"
import { Avatar, Box, Stack, Typography } from "@mui/material"

import avatar from "../../../assets/thumbnail/avatarKitty.jpg"
import NavLinkStyled from "../NavLinkStyled/NavLinkStyled"
import AvatarColored from "../AvatarColored/AvatarColored"

function stringToColor(string: string) {
  let hash = 0
  let i

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = "#"

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }
  /* eslint-enable no-bitwise */

  return color
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}`,
  }
}

interface IAvatarWithNameProps {
  user: {
    id: number
    fullName: string
  }
}

const AvatarWithName: React.FC<IAvatarWithNameProps> = ({ user }) => {
  return (
    <NavLinkStyled to={`/users/${user.id}`}>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <AvatarColored fullName={user.fullName} size="24px" />
        <Typography>{user.fullName}</Typography>
      </Stack>
    </NavLinkStyled>
  )
}

export default AvatarWithName
