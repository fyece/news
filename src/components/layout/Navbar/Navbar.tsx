import React, { FC } from "react"
import {
  styled,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  PaletteMode,
} from "@mui/material"
import {
  PersonOutlineOutlined,
  FeedOutlined,
  ExploreOutlined,
  FormatListBulleted,
  BookmarkBorderOutlined,
  DarkModeOutlined,
} from "@mui/icons-material"

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    // borderRadius: theme.shape.borderRadius,
  },
}))

const StyledListItem = styled(ListItem)({
  marginTop: -12,
  "&:first-child": {
    marginTop: 0,
  },
})

interface IProps {
  mode: PaletteMode
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>
}

const Navbar: FC<IProps> = ({ mode, setMode }) => {
  const isDarkMode = mode === "dark" ? true : false
  const handleClick = () => {
    isDarkMode ? setMode("light") : setMode("dark")
  }

  return (
    <Box>
      <List sx={{ width: "70%", maxWidth: 360, bgcolor: "background.paper" }}>
        <StyledListItem>
          <StyledListItemButton>
            <ListItemIcon>
              <PersonOutlineOutlined />
            </ListItemIcon>
            <ListItemText primary="Мой профиль" />
          </StyledListItemButton>
        </StyledListItem>

        <StyledListItem>
          <StyledListItemButton>
            <ListItemIcon>
              <FeedOutlined />
            </ListItemIcon>
            <ListItemText primary=" Моя лента" />
          </StyledListItemButton>
        </StyledListItem>

        <StyledListItem>
          <StyledListItemButton>
            <ListItemIcon>
              <ExploreOutlined />
            </ListItemIcon>
            <ListItemText primary=" Исследовать" />
          </StyledListItemButton>
        </StyledListItem>

        <StyledListItem>
          <StyledListItemButton>
            <ListItemIcon>
              <FormatListBulleted />
            </ListItemIcon>
            <ListItemText primary="Подписки" />
          </StyledListItemButton>
        </StyledListItem>

        <StyledListItem>
          <StyledListItemButton>
            <ListItemIcon>
              <BookmarkBorderOutlined />
            </ListItemIcon>
            <ListItemText primary="Закладки" />
          </StyledListItemButton>
        </StyledListItem>

        <StyledListItem>
          <StyledListItemButton>
            <ListItemIcon>
              <DarkModeOutlined />
            </ListItemIcon>
            <Switch
              onClick={handleClick}
              checked={mode === "dark" ? true : false}
            />
          </StyledListItemButton>
        </StyledListItem>
      </List>
    </Box>
  )
}

export default Navbar
