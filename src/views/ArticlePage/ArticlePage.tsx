import React from "react"
import { useMatch } from "react-router"
import { Stack } from "@mui/material"

import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux"
import { getArticleById } from "../../store/article/article.actions"
import Article from "../../components/layout/Article/Article"
import CommentSection from "../../components/layout/CommentSection/CommentSection"

const ArticlePage = () => {
  const dispatch = useAppDispatch()
  const match = useMatch("/articles/:id")

  const user = useAppSelector((state) => state.authReducer.user)
  const article = useAppSelector((state) => state.articleReducer.currentArticle)
  const isAuth = !!user
  const isOwner = user?.id === article?.user.id

  const articleId = match?.params.id || 0

  React.useEffect(() => {
    dispatch(getArticleById(+articleId))
  }, [dispatch, articleId])

  return (
    <>
      <Stack spacing={2} sx={{ minWidth: "640px", maxWidth: "640px" }}>
        <Article article={article} isOwner={isOwner} />
        <CommentSection isAuth={isAuth} articleId={article?.id || 0} />
      </Stack>
    </>
  )
}

export default ArticlePage
