import React from "react"
import { Box, Button, Stack } from "@mui/material"

import { useAppDispatch, useAppSelector } from "../../../utils/hooks/redux"
import { createComment } from "../../../store/comment/comment.actions"
import Input from "../../common/Input/Input"

interface IWriteCommetntProps {
  articleId: number
}

const WriteComment: React.FC<IWriteCommetntProps> = ({ articleId }) => {
  const dispatch = useAppDispatch()
  const [comment, setComment] = React.useState("")
  const token = useAppSelector((state) => state.authReducer.user?.token) || ""
  const commentDto = {
    articleId,
    text: comment,
  }

  const handleComment = async () => {
    try {
      dispatch(createComment([commentDto, articleId, token]))
      setComment("")
    } catch (err) {
      console.warn("Add comment", err)
    }
  }

  return (
    <Stack spacing={2}>
      <Input
        multiline
        maxRows={4}
        placeholder="Написать комментарий..."
        value={comment}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setComment(e.target.value)
        }
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          disabled={!comment.trim()}
          onClick={handleComment}
          variant="contained"
          disableElevation
          sx={{ width: "fit-content" }}
        >
          Отправить
        </Button>
      </Box>
    </Stack>
  )
}

export default WriteComment
