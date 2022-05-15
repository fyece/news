import {
  Box,
  Button,
  Card,
  Typography,
  CardContent,
  CardMedia,
  CardActions,
  Checkbox,
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
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation() // Предотвратить всплытие
    remove(article)
  }
  const handleUpdate = () => {
    const content = prompt("new content") || "content"
    update({ ...article, content })
  }

  return (
    <Card variant="outlined" sx={{ marginTop: 2 }}>
      <Box p={1}>
        <CardContent>
          <Button onClick={handleUpdate}>update</Button>
          <Button onClick={handleDelete}>delete</Button>
          <Typography>{article.author}</Typography>
          <Typography variant="h5" component="h1">
            {article.title}
          </Typography>
          <Typography>{article.content}</Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        // height="10%"
        // height="194"
        height="400"
        image={articleImage}
        alt="kitten"
      />
      <Box p={1}>
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
