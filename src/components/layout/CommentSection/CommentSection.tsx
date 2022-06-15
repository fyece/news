import React from "react"
import { Paper, Stack, Typography } from "@mui/material"

import WriteComment from "../../forms/WriteComment/WriteComment"
import CommentList from "./CommentsList/CommentsList"

interface ICommentSectionProps {
  isAuth: boolean
  articleId: number
}

const CommentSection: React.FC<ICommentSectionProps> = ({
  articleId,
  isAuth,
}) => {
  return (
    <>
      <Paper elevation={0}>
        <Stack spacing={2} p={2}>
          <Typography variant="h6">Комментарии</Typography>
          {isAuth && <WriteComment articleId={articleId} />}

          <CommentList articleId={articleId} />
        </Stack>
      </Paper>
    </>
  )
}

export default CommentSection
