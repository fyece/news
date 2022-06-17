import React from "react"
import { Box, Stack, Typography } from "@mui/material"

import { IComment } from "../../../../types/types"
import EditDeleteButton from "../../../common/EditDeleteButton/EditDeleteButton"
import AvatarNameDate from "../../../common/AvatarNameDate/AvatarNameDate"
import EditCommentForm from "../../../forms/EditCommentForm/EditCommentForm"

interface ICommentItemProps {
  data: IComment
  currentUser?: number
}

const CommentItem: React.FC<ICommentItemProps> = ({ data, currentUser }) => {
  const [editMode, setEditMode] = React.useState(false)
  const user = {
    id: data.user.id,
    fullName: data.user.fullName,
  }

  return (
    <Stack spacing={1}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AvatarNameDate
          fullName={user.fullName}
          id={user.id}
          date={data.createdAt}
        />

        {/* replace with isOwner here */}

        {data.user.id === currentUser && (
          <EditDeleteButton comment={data} setEditMode={setEditMode} />
        )}
      </Box>
      {editMode ? (
        <EditCommentForm comment={data} setEditMode={setEditMode} />
      ) : (
        <Typography>{data.text}</Typography>
      )}
    </Stack>
  )
}

export default CommentItem
