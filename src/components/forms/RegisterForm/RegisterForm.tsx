import React, { FC } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Box, Button, Stack, TextField } from "@mui/material"

interface IFormInputs {
  fullName: string
  email: string
  password: string
}

const schema = yup
  .object({
    fullName: yup.string().required("Необходимо ввести имя"),
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
            error={errors.fullName ? true : false}
            id="standard-basic"
            label="Имя"
            variant="standard"
            helperText={errors.fullName?.message}
            {...register("fullName")}
          />
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

          <Button type="submit">Зарегистрироваться</Button>
          <Button onClick={toLogin}>Войти</Button>
        </Stack>
      </form>
    </Box>
  )
}

export default RegisterForm
