import { Avatar, Box, Stack, Typography } from "@mui/material"
import React from "react"
import AvatarColored from "../AvatarColored/AvatarColored"
import NavLinkStyled from "../NavLinkStyled/NavLinkStyled"
import RelativeDate from "../RelativeDate/RelativeDate"

interface IAvatarNameDateProps {
  fullName: string
  id: number
  date: string
}

const AvatarNameDate: React.FC<IAvatarNameDateProps> = ({
  fullName,
  id,
  date,
}) => {
  return (
    <>
      <NavLinkStyled to={`/users/${id}`}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Stack direction="row" spacing={2}>
            <AvatarColored fullName={fullName} variant="rounded" />
            <Stack>
              <Typography sx={{ fontWeight: 500 }}>{fullName}</Typography>
              <RelativeDate date={date} fontSize={12} />
            </Stack>
          </Stack>
        </Box>
      </NavLinkStyled>
    </>
  )
}

export default AvatarNameDate
