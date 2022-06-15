import React, { FC } from "react"
import {
  styled,
  Box,
  Link,
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
  Settings,
} from "@mui/icons-material"
import { NavLink } from "react-router-dom"

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    borderRadius: theme.shape.borderRadius,
  },
}))

const StyledListItem = styled(ListItem)({
  marginTop: -12,
  "&:first-of-type": {
    marginTop: 0,
  },
})

const StyledLink = styled(NavLink)({
  color: "inherit",
  textDecoration: "none",
  width: "100%",
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
      <List>
        <StyledListItem>
          <StyledLink to="/profile">
            <StyledListItemButton>
              <ListItemIcon>
                <PersonOutlineOutlined />
              </ListItemIcon>
              <ListItemText primary="Мой профиль" sx={{ ml: -2 }} />
            </StyledListItemButton>
          </StyledLink>
        </StyledListItem>

        <StyledListItem>
          <StyledLink to="/articles">
            <StyledListItemButton>
              <ListItemIcon>
                <ExploreOutlined />
              </ListItemIcon>
              <ListItemText primary=" Исследовать" sx={{ ml: -2 }} />
            </StyledListItemButton>
          </StyledLink>
        </StyledListItem>

        <StyledListItem>
          <StyledLink to="/users">
            <StyledListItemButton>
              <ListItemIcon>
                <FormatListBulleted />
              </ListItemIcon>
              <ListItemText primary="Пользователи" sx={{ ml: -2 }} />
            </StyledListItemButton>
          </StyledLink>
        </StyledListItem>

        <StyledListItem>
          <StyledLink to="/settings">
            <StyledListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Настройки" sx={{ ml: -2 }} />
            </StyledListItemButton>
          </StyledLink>
        </StyledListItem>

        <StyledListItem>
          <StyledListItemButton>
            <ListItemIcon>
              <DarkModeOutlined />
            </ListItemIcon>
            <Switch
              sx={{ ml: -2 }}
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
