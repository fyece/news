import React from "react"
import { Avatar, Box, Button, Stack, Typography } from "@mui/material"

import { IUser } from "../../types/types"
import AvatarWithName from "../common/AvatarWithName/AvatarWithName"
import avatar from "../../assets/thumbnail/avatarKitty.jpg"
import NavLinkStyled from "../common/NavLinkStyled/NavLinkStyled"
import AvatarColored from "../common/AvatarColored/AvatarColored"

interface UserItemProps {
  user: IUser
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minWidth: "100%",
      }}
    >
      <NavLinkStyled to={`${user.id}`}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <AvatarColored fullName={user.fullName} size="48px" />
          <Typography sx={{ fontWeight: 500 }}>{user.fullName}</Typography>
        </Stack>
      </NavLinkStyled>
      <Box>
        <Typography>{user.email}</Typography>
      </Box>
    </Box>
  )
}

export default UserItem
