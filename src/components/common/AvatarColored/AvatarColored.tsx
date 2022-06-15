import React from "react"
import Avatar from "@mui/material/Avatar"

function stringToColor(string: string) {
  let hash = 0
  let i

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = "#"

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }

  return color
}

function stringAvatar(name: string, size: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: size,
      height: size,
      fontSize: `calc(${size} * 0.5)`,
    },
    children: `${name[0][0]}`,
  }
}

interface IAvatarColoredProps {
  fullName: string
  variant?: "circular" | "rounded" | "square"
  size?: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

const AvatarColored: React.FC<IAvatarColoredProps> = ({
  fullName = "Name",
  variant = "rounded",
  size = "40px",
  onClick,
  ...props
}) => {
  return (
    <Avatar
      alt={fullName}
      variant={variant}
      onClick={onClick}
      {...stringAvatar(fullName, size)}
      {...props}
    />
  )
}

export default AvatarColored
