import React, { FC } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useCookies } from "react-cookie"
import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { register as registerUser } from "../../../store/auth/auth.actions"
import { useAppDispatch, useAppSelector } from "../../../utils/hooks/redux"

interface IFormInputs {
  fullName: string
  email: string
  password: string
}

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(4, "Имя пользователя должно содержать не мене 4 символов")
      .max(64, "Имя пользователя должно содержать не больше 64 символов")
      .required("Необходимо ввести имя"),
    email: yup
      .string()
      .email("Некорректный email")
      .required("Необходимо ввести email"),
    password: yup.string().required("Необходимо ввести пароль"),
  })
  .required()

interface IProps {
  toLogin: () => void
}

const RegisterForm: FC<IProps> = ({ toLogin }) => {
  const [cookies, setCookie] = useCookies(["token"])
  const dispatch = useAppDispatch()
  const userData = useAppSelector((state) => state.authReducer.user)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: IFormInputs) => {
    await dispatch(registerUser(data))
    setCookie("token", userData?.token, {
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
    })
  }

  return (
    <Stack spacing={4}>
      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        Зарегистрироваться
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
            error={errors.fullName ? true : false}
            fullWidth
            label="Имя"
            variant="outlined"
            helperText={errors.fullName?.message}
            {...register("fullName")}
          />

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
            Зарегистрироваться
          </Button>
          <Button size="small" disableElevation onClick={toLogin}>
            Войти
          </Button>
        </Stack>
      </form>
    </Stack>
  )
}

export default RegisterForm
