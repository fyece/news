import React from "react"
import { Navigate } from "react-router-dom"

import { useAppSelector } from "../../../utils/hooks/redux"

interface IAuthorizationProtectProps {
  children: React.ReactNode
}

const AuthorizationProtect: React.FC<IAuthorizationProtectProps> = ({
  children,
}) => {
  const isAuth = !!useAppSelector((state) => state.authReducer.user)
  if (!isAuth) {
    return <Navigate to="/" />
  }
  return <>{children}</>
}

export default AuthorizationProtect
