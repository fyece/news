import {
  Box,
  Button,
  Card,
  Typography,
  CardContent,
  CardMedia,
  CardActions,
  Checkbox,
  styled,
} from "@mui/material"
import React, { FC } from "react"
import { IArticle } from "../../types/IArticle"
import articleImage from "../../assets/thumbnail/avatarKitty.jpg"
import { BookmarkBorderOutlined, BookmarkOutlined } from "@mui/icons-material"

interface IArticleProps {
  article: IArticle
  update: (article: IArticle) => void
  remove: (article: IArticle) => void
}

const Article: FC<IArticleProps> = ({ article, update, remove }) => {
  return (
    <Card variant="outlined" sx={{ marginTop: 2 }}>
      <Box p={1}>
        <CardContent>
          {/* <Typography>{article.author}</Typography> */}
          <Typography variant="h5" component="h1">
            {article.title}
          </Typography>
          <Typography>{article.content}</Typography>
        </CardContent>
        <CardMedia
          component="img"
          // height="10%"
          // height="194"
          height="400"
          image={articleImage}
          alt="kitten"
        />
        <CardActions>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Checkbox
              icon={<BookmarkBorderOutlined />}
              checkedIcon={<BookmarkOutlined />}
            />
          </Box>
        </CardActions>
      </Box>
    </Card>
  )
}

export default Article
