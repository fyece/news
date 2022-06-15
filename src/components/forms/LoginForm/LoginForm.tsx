import React, { FC } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useCookies } from "react-cookie"
// import { ILoginUserDto } from "../../../types/types"
import { login } from "../../../store/auth/auth.actions"
import { useAppDispatch, useAppSelector } from "../../../utils/hooks/redux"
import { Box, Button, Stack, TextField, Typography } from "@mui/material"

interface IFormInputs {
  email: string
  password: string
}

const schema = yup
  .object({
    email: yup
      .string()
      .email("Некорректный email")
      .required("Необходимо ввести email"),
    password: yup.string().required("Необходимо ввести пароль"),
  })
  .required()

interface IProps {
  toRegister: () => void
}

const LoginForm: FC<IProps> = ({ toRegister }) => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: IFormInputs) => {
    await dispatch(login(data))
  }

  return (
    <Stack spacing={4}>
      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        Войти
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          spacing={3}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            error={errors.email ? true : false}
            fullWidth
            label="Email"
            variant="outlined"
            helperText={errors.email?.message}
            {...register("email")}
          />

          <TextField
            error={errors.password ? true : false}
            fullWidth
            label="Пароль"
            variant="outlined"
            type="password"
            helperText={errors.password?.message}
            {...register("password")}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disableElevation
            sx={{ width: "fit-content" }}
          >
            Войти
          </Button>
          <Button size="small" disableElevation onClick={toRegister}>
            Регистрация
          </Button>
        </Stack>
      </form>
    </Stack>
  )
}

const LoginContainer: React.FC<IProps> = ({ toRegister }) => {
  const [cookies, setCookie] = useCookies(["token"])
  const userData = useAppSelector((state) => state.authReducer.user)
  setCookie("token", userData?.token, {
    path: "/",
    maxAge: 30 * 24 * 60 * 60,
  })
  console.log(cookies.token)

  return <LoginForm toRegister={toRegister} />
}

export default LoginContainer
