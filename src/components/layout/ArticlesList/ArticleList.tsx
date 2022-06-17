import React from "react"
import { Stack } from "@mui/material"

import ArticleItem from "../../ArticleItem/ArticleItem"
import { IArticle } from "../../../types/types"

interface IArticleListProps {
  articles: IArticle[]
}

const ArticleList: React.FC<IArticleListProps> = ({ articles }) => {
  const articlesElements = articles?.map((article) => {
    return (
      <ArticleItem
        key={article.id}
        id={article.id}
        title={article.title}
        description={article.description}
        views={article.views}
      />
    )
  })

  return (
    <>
      <Stack spacing={2}>{articlesElements}</Stack>
    </>
  )
}

export default ArticleList
