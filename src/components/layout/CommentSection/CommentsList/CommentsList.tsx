import React from "react"
import { Stack, Typography } from "@mui/material"

import { useAppDispatch, useAppSelector } from "../../../../utils/hooks/redux"
import { IComment } from "../../../../types/types"
import { getComments } from "../../../../store/comment/comment.actions"
import CommentItem from "../CommentItem/CommentItem"
import { grey } from "@mui/material/colors"

interface ICommentListProps {
  articleId: number
}

const CommentList: React.FC<ICommentListProps> = ({ articleId }) => {
  const dispatch = useAppDispatch()
  const [comments, setComments] = React.useState<IComment[]>([])
  React.useEffect(() => {
    ;(async () => {
      try {
        await dispatch(getComments(articleId))
      } catch (e) {
        console.warn("Fetch comments", e)
      }
    })()
  }, [dispatch, articleId])

  const commentsData = useAppSelector((state) => state.commentReducer.comments)
  const userId = useAppSelector((state) => state.authReducer.user?.id)

  React.useEffect(() => {
    setComments(commentsData)
  }, [commentsData])

  const commentsElements = comments.map((c) => {
    return (
      <div key={c.id}>
        <CommentItem data={c} currentUser={userId} />
      </div>
    )
  })

  return (
    <>
      {commentsElements.length === 0 ? (
        <Typography sx={{ color: grey[600], alignSelf: "center" }}>
          Комментариев нет
        </Typography>
      ) : (
        <Stack spacing={3}>{commentsElements}</Stack>
      )}
    </>
  )
}

export default CommentList
