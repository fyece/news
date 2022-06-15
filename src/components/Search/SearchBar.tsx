import React, { useState } from "react"
import {
  styled,
  alpha,
  Box,
  Paper,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material"
import { InputBase } from "@mui/material"
import { IArticle } from "../../types/types"
import NavLinkStyled from "../common/NavLinkStyled/NavLinkStyled"
import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux"
import { searchArticle } from "../../store/article/article.actions"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "320px",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    // transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}))

function useOutsideAlerter(ref: any, setOpen: (open: boolean) => void) {
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref, setOpen])
}

function SearchBar() {
  const wrapperRef = React.useRef(null)
  const [open, setOpen] = useState(false)
  useOutsideAlerter(wrapperRef, setOpen)

  const dispatch = useAppDispatch()
  const [searchValue, setSearchValue] = React.useState("")
  const [articles, setArticles] = React.useState<IArticle[]>()
  const handleChangeInput = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setOpen(true)
    setSearchValue(e.target.value)
    try {
      await dispatch(searchArticle({ title: e.target.value }))
    } catch (err) {
      console.warn(err)
    }
  }

  const articlesData = useAppSelector(
    (state) => state.articleReducer.searchingArticles
  )

  React.useEffect(() => {
    setArticles(articlesData)
  }, [articlesData])

  const articlesElements = articles?.map((a) => {
    return (
      <ListItem key={a.id} sx={{ px: "0" }}>
        <NavLinkStyled to={`articles/${a.id}`}>
          <ListItemButton>{a.title}</ListItemButton>
        </NavLinkStyled>
      </ListItem>
    )
  })

  return (
    <Box>
      <Search>
        <StyledInputBase
          placeholder="Поиск"
          value={searchValue}
          onChange={handleChangeInput}
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      {open && articles && articles.length > 0 && (
        <Paper
          ref={wrapperRef}
          sx={{ position: "absolute", top: "50px", width: "320px" }}
        >
          <List>{articlesElements}</List>
        </Paper>
      )}
    </Box>
  )
}

export default SearchBar
