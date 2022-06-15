import React from "react"

import { useAppSelector } from "../../utils/hooks/redux"
import UserPage from "../UserPage/UserPage"

const ProfilePage = () => {
  const me = useAppSelector((state) => state.authReducer.user)

  return (
    <>
      <UserPage id={me?.id} />
    </>
  )
}

export default ProfilePage
