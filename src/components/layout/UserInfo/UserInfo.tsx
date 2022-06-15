import React from "react"
import { Settings } from "@mui/icons-material"
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material"
import { grey } from "@mui/material/colors"
import moment from "moment"
import "moment/locale/ru"

import { IUser } from "../../../types/types"
import { useAppSelector } from "../../../utils/hooks/redux"
import NavLinkStyled from "../../common/NavLinkStyled/NavLinkStyled"
import AvatarColored from "../../common/AvatarColored/AvatarColored"

interface UserInfoProps {
  user: IUser | null
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const isOwner =
    useAppSelector((state) => state.authReducer.user?.id) === user?.id
  const creationDate = moment(user?.createdAt).locale("ru").format("LL")
  return (
    <Paper sx={{ minWidth: "640px", maxWidth: "640px" }} elevation={0}>
      <Box p={2}>
        <Stack spacing={2}>
          <AvatarColored fullName={user?.fullName || "Name"} size="120px" />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4" component="h2" sx={{ fontWeight: 500 }}>
              {user?.fullName}
            </Typography>
            {isOwner ? (
              <NavLinkStyled to="/settings">
                <IconButton size="small">
                  <Settings fontSize="small" sx={{ color: grey[500] }} />
                </IconButton>
              </NavLinkStyled>
            ) : null}
          </Box>
          {user?.bio && <Typography>{user?.bio}</Typography>}
          <Typography sx={{ color: grey[600] }}>
            На проекте с {creationDate}
          </Typography>
        </Stack>
      </Box>
    </Paper>
  )
}

export default UserInfo
