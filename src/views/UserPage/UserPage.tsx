import React, { useEffect } from "react"
import { useMatch } from "react-router"
import { Stack } from "@mui/material"

import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux"
import UserInfo from "../../components/layout/UserInfo/UserInfo"
import { getUserById } from "../../store/user/user.actions"
import ArticleList from "../../components/layout/ArticlesList/ArticleList"
import { searchArticle } from "../../store/article/article.actions"

interface IUserPageProps {
  id?: number
}

const UserPage: React.FC<IUserPageProps> = ({ id }) => {
  const dispatch = useAppDispatch()
  const match = useMatch(`users/:id`)
  const userId = id ? id : match?.params.id || 0
  useEffect(() => {
    dispatch(getUserById(+userId))
    dispatch(searchArticle({ userId: +userId }))
  }, [dispatch, userId])
  const user = useAppSelector((state) => state.userReducer.user)
  const userArticles = useAppSelector(
    (state) => state.articleReducer.searchingArticles
  )
  return (
    <>
      <Stack spacing={2} sx={{ maxWidth: "640px" }}>
        <UserInfo user={user} />
        <ArticleList articles={userArticles} />
      </Stack>
    </>
  )
}

export default UserPage
