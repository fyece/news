import React from "react"
import { useNavigate } from "react-router-dom"

import { useAppSelector } from "../../../utils/hooks/redux"

interface IAuthorizationProtectProps {
  children: React.ReactNode
}

const AuthorizationProtect: React.FC<IAuthorizationProtectProps> = ({
  children,
}) => {
  const isAuth = !!useAppSelector((state) => state.authReducer.user)
  const redirect = useNavigate()
  if (!isAuth) {
    redirect("/")
  }
  return <>{children}</>
}

export default AuthorizationProtect
