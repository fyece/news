import React, { FC, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Box, Button, Stack, TextField } from "@mui/material"

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: IFormInputs) => console.log(data)

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <TextField
            error={errors.email ? true : false}
            id="standard-basic"
            label="Email"
            variant="standard"
            helperText={errors.email?.message}
            {...register("email")}
          />

          <TextField
            error={errors.password ? true : false}
            id="standard-basic"
            label="Пароль"
            variant="standard"
            type="password"
            helperText={errors.password?.message}
            {...register("password")}
          />

          <Button type="submit">Войти</Button>
          <Button onClick={toRegister}>Регистрация</Button>
        </Stack>
      </form>
    </Box>
  )
}

export default LoginForm
