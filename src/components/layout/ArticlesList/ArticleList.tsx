import React, { useState } from "react"
import { Skeleton, Stack, Typography } from "@mui/material"
import { articleApi } from "../../../services/article.service"
import Article from "../../Article/Article"
import { useAppDispatch } from "../../../utils/hooks/redux"
import { fetchArticles } from "../../../store/article/article.actions"

const ArticleList = () => {
  const [page, setPage] = useState(1)
  const limit = 5

  const [updateArticle, {}] = articleApi.useUpdateArticleMutation()
  const [removeArticle, {}] = articleApi.useDeleteArticleMutation()
  const { data, error, isLoading } = articleApi.useGetArticlesQuery([
    page,
    limit,
  ])

  // const data = useAppDispatch(fetchArticles([page, limit]))

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
      <Typography sx={{ color: "gray", marginTop: 2 }}>Статьи</Typography>
      {isLoading ? (
        //
        // skeleton on loading
        //
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={"100%"}
          sx={{ minHeight: "100vh" }}
        />
      ) : null}
      {error ? <div>error</div> : null}
      <Stack>{articlesElements}</Stack>
    </>
  )
}

export default ArticleList
