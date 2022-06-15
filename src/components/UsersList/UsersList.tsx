import React, { useEffect } from "react"
import { List, ListItem, Stack, Typography } from "@mui/material"

import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux"
import { getUsers } from "../../store/user/user.actions"
import { IUser } from "../../types/types"
import UserItem from "../UserItem/UserItem"

function generate(users: IUser[]) {
  return users.map((u) =>
    React.cloneElement(
      <ListItem sx={{ px: 0 }}>
        <UserItem user={u} />
      </ListItem>,
      {
        key: u.id,
      }
    )
  )
}

const UsersList = () => {
  const dispatch = useAppDispatch()
  const { users, total } = useAppSelector((state) => state.userReducer)
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <Stack spacing={1} p={2}>
      <Typography variant="h5">Список пользователей</Typography>
      <List>{generate(users)}</List>
    </Stack>
  )
}

export default UsersList
