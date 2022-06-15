import React from "react"
import { AppBar, Box, Button, Grid, styled, Toolbar } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

import LogoWithBurger from "../../LogoWithBurger/LogoWtihBurger"
import SearchBar from "../../Search/SearchBar"
import AppbarMenu from "../../AppbarMenu/AppbarMenu"
import CreateArticleButton from "../../CreateArticleButton/CreateArticleButton"

const StyledAppbar = styled(AppBar)({
  boxShadow: "none",
})

const Appbar = () => {
  return (
    <>
      <StyledAppbar position="sticky">
        <Toolbar>
          <Grid
            container
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid
              item
              xs={5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <LogoWithBurger />

              <SearchBar />
              <CreateArticleButton />
            </Grid>

            <Grid item xs={2} display={"flex"} justifyContent={"flex-end"}>
              <AppbarMenu />
            </Grid>
          </Grid>
        </Toolbar>
      </StyledAppbar>
    </>
  )
}

export default Appbar
