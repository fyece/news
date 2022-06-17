import React from "react"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { MoreHoriz } from "@mui/icons-material"

import { useAppDispatch, useAppSelector } from "../../../utils/hooks/redux"
import { removeComment } from "../../../store/comment/comment.actions"
import { IArticle, IComment } from "../../../types/types"
import { useNavigate } from "react-router"
import { deleteArticle } from "../../../store/article/article.actions"

interface EditDeleteButtonProps {
  comment?: IComment
  article?: IArticle | null
  setEditMode?: (arg0: boolean) => void
}

const EditDeleteButton: React.FC<EditDeleteButtonProps> = ({
  comment,
  article,
  setEditMode,
}) => {
  const dispatch = useAppDispatch()
  const token = useAppSelector((state) => state.authReducer.user?.token) || ""

  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleEdit = async () => {
    if (comment) {
      setEditMode && setEditMode(true)
    }

    if (article) {
      navigate(`/editor/${article.id}`)
    }

    handleClose()
  }

  const handleDelete = async () => {
    if (comment) {
      try {
        await dispatch(removeComment([comment, token]))
      } catch (e) {
        console.warn("Delete comment", e)
      }
    }

    if (article) {
      try {
        await dispatch(deleteArticle([article, token]))
      } catch (e) {
        console.warn("Delete article", e)
      }
      navigate("/")
    }

    handleClose()
  }

  return (
    <div>
      <IconButton size="small" onClick={handleClick}>
        <MoreHoriz fontSize="small" />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleEdit}>Изменить</MenuItem>
        <MenuItem onClick={handleDelete}>Удалить</MenuItem>
      </Menu>
    </div>
  )
}

export default EditDeleteButton
