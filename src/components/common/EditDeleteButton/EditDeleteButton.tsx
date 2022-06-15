import React from "react"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { MoreHoriz } from "@mui/icons-material"

import { useAppDispatch, useAppSelector } from "../../../utils/hooks/redux"
import { removeComment } from "../../../store/comment/comment.actions"
import { IComment } from "../../../types/types"

interface EditDeleteButtonProps {
  data: IComment
}

const EditDeleteButton: React.FC<EditDeleteButtonProps> = ({ data }) => {
  const dispatch = useAppDispatch()
  const token = useAppSelector((state) => state.authReducer.user?.token) || ""

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleEdit = async () => {
    //
    handleClose()
  }

  const handleDelete = async () => {
    try {
      await dispatch(removeComment([data, token]))
    } catch (e) {
      console.warn("Delete comment", e)
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
