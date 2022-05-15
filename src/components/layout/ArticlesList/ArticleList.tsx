import React from "react"
import { Stack, Typography } from "@mui/material"
import { articleApi } from "../../../services/article.service"
import Article from "../../Article/Article"

const ArticleList = () => {
  const [updateArticle, {}] = articleApi.useUpdateArticleMutation()
  const [removeArticle, {}] = articleApi.useDeleteArticleMutation()
  const { data, error, isLoading } = articleApi.useGetAllArticlesQuery(10)
  const articlesElements = data?.map((article) => (
    <Article
      key={article.id}
      article={article}
      update={updateArticle}
      remove={removeArticle}
    />
  ))

  return (
    <>
      {isLoading ? <div>`LOADING-LOADING-LOADING`</div> : null}
      {error ? <div>error</div> : null}
      <Typography sx={{ color: "gray", marginTop: 2 }}>Статьи</Typography>
      <Stack>{articlesElements}</Stack>
    </>
  )
}

export default ArticleList
