import { Button, Stack } from "@mui/material"
import React from "react"
import { editComment } from "../../../store/comment/comment.actions"
import { IComment } from "../../../types/types"
import { useAppDispatch, useAppSelector } from "../../../utils/hooks/redux"
import Input from "../../common/Input/Input"

interface IEditCommentFormProps {
  comment: IComment
  setEditMode: (arg0: boolean) => void
}

const EditCommentForm: React.FC<IEditCommentFormProps> = ({
  comment,
  setEditMode,
}) => {
  const [value, setValue] = React.useState(comment.text)
  const [loading, setLoading] = React.useState(false)
  const token = useAppSelector((state) => state.authReducer.user?.token) || ""
  const dispatch = useAppDispatch()
  const updateComment = async () => {
    const updatedComment = { ...comment, text: value }
    setLoading(true)
    await dispatch(editComment([comment.id, updatedComment, token]))
    setLoading(false)
    setEditMode(false)
  }
  return (
    <Stack spacing={1}>
      <Input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <Button
        disabled={!value || loading}
        disableElevation
        placeholder="Введите текст комментария"
        onClick={updateComment}
        sx={{ width: "fit-content" }}
      >
        Изменить
      </Button>
    </Stack>
  )
}

export default EditCommentForm
