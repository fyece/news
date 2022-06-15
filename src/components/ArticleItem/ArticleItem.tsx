import { Box, Typography, Checkbox, Paper, styled, Stack } from "@mui/material"
import React, { FC } from "react"
// import articleImage from "../../assets/thumbnail/image.webp"
import articleImage from "../../assets/thumbnail/avatarKitty.jpg"
import {
  BookmarkBorderOutlined,
  BookmarkOutlined,
  Visibility,
} from "@mui/icons-material"
import Image from "../common/Image/Image"
import AvatarWithName from "../common/AvatarWithName/AvatarWithName"
import { NavLink } from "react-router-dom"

interface IArticleItemProps {
  id: number
  title: string
  description: string
  imageUrl?: string
  views: number
}

const ArticleItemActions = styled(Box)({
  display: "flex",
  alignItems: "center",
  // justifyContent: "space-between",
  justifyContent: "flex-end",
})

interface IWatchCounterProps {
  count: number
}

const WatchCounter: React.FC<IWatchCounterProps> = ({ count }) => {
  return (
    <Box display={"flex"}>
      <Visibility sx={{ marginRight: "4px", color: "#b8b8b8" }} />
      <Typography sx={{ color: "#b8b8b8" }}>{count}</Typography>
    </Box>
  )
}

const StyledLink = styled(NavLink)({
  color: "inherit",
  textDecoration: "none",
})

const ArticleItem: FC<IArticleItemProps> = ({
  id,
  title,
  description,
  imageUrl,
  views,
}) => {
  return (
    <Paper elevation={0}>
      <Box p={2}>
        <Stack spacing={1}>
          {/* <AvatarWithName user={author} /> */}
          <StyledLink to={`/articles/${id}`}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ marginBottom: 1, fontWeight: 500 }}
            >
              {title}
            </Typography>
            <Typography
              dangerouslySetInnerHTML={{ __html: description }}
              sx={{ marginBottom: 1 }}
            />
          </StyledLink>

          {imageUrl && <Image src={articleImage} height={476} width={640} />}

          <ArticleItemActions>
            {/* <Checkbox
              sx={{ padding: 0, margin: 0 }}
              icon={<BookmarkBorderOutlined />}
              checkedIcon={<BookmarkOutlined />}
            /> */}
            <WatchCounter count={views} />
          </ArticleItemActions>
        </Stack>
      </Box>
    </Paper>
  )
}

export default ArticleItem
