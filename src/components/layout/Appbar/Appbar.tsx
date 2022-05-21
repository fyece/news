import React from "react"
import { AppBar, Button, Grid, styled, Toolbar } from "@mui/material"
import LogoWithBurger from "../../LogoWithBurger/LogoWtihBurger"
import AddIcon from "@mui/icons-material/Add"
import SearchBar from "../../Search/SearchBar"
import { articleApi } from "../../../services/article.service"
import { IArticle } from "../../../types/IArticle"
import AppbarMenu from "../../AppbarMenu/AppbarMenu"

const StyledAppbar = styled(AppBar)({
  boxShadow: "none",
})

const Appbar = () => {
  const [createArticle, { error: createError }] =
    articleApi.useCreateArticleMutation()
  const handleCreateArticle = async () => {
    const authorId = Number(prompt("authorId"))
    const title = prompt("title") || "untilted"
    const content = prompt("content") || "empty"
    const author = prompt("atuthor name") || "unknown"
    await createArticle({ authorId, title, content, author } as IArticle)
  }

  return (
    <>
      <StyledAppbar position="sticky">
        <Toolbar>
          <Grid
            container
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Grid item xs={3}>
              <LogoWithBurger />
            </Grid>
            <Grid item xs={5} display={"flex"} justifyContent={"space-between"}>
              <SearchBar />
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleCreateArticle}
              >
                Создать
              </Button>
            </Grid>
            <Grid item xs={4} display={"flex"} justifyContent={"flex-end"}>
              <AppbarMenu />
            </Grid>
          </Grid>
        </Toolbar>
      </StyledAppbar>
    </>
  )
}

export default Appbar
