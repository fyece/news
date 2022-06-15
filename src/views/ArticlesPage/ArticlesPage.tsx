import React from "react"
import { Box } from "@mui/material"

import ArticleList from "../../components/layout/ArticlesList/ArticleList"
import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux"
import { fetchArticles } from "../../store/article/article.actions"

const ArticlesPage = () => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  const data = useAppSelector((state) => state.articleReducer.articles)
  const isLoading = useAppSelector((state) => state.articleReducer.isLoading)
  const error = useAppSelector((state) => state.articleReducer.error)
  return (
    <Box sx={{ maxWidth: "640px" }}>
      <ArticleList articles={data} />
    </Box>
  )
}

export default ArticlesPage
