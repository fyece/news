import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Box, Button, Stack, TextField } from "@mui/material"
import { IUpdateUserDto } from "../../../types/types"
import { useAppDispatch, useAppSelector } from "../../../utils/hooks/redux"
import { getMe, login, updateMe } from "../../../store/auth/auth.actions"

interface IFormInputs {
  fullName: string
  bio: string
}

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(4, "Минимум 4 символа")
      .max(64, "Максимум 64 символа")
      .required("Необходимо ввести имя"),
    bio: yup.string().max(256, "Максимум 256 символов"),
  })
  .required()

const SettingsForm = () => {
  const dispatch = useAppDispatch()
  const token = useAppSelector((state) => state.authReducer.user?.token) || ""
  const currentUser = useAppSelector((state) => state.authReducer.user)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: currentUser?.fullName,
      bio: currentUser?.bio,
    },
  })
  const onSubmit = async (data: IUpdateUserDto) => {
    await dispatch(updateMe([token, data]))
    // await dispatch(getMe(token))
  }
  return (
    <Box sx={{ minWidth: "640px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            error={errors.fullName ? true : false}
            id="standard-basic"
            label="Имя"
            variant="outlined"
            helperText={errors.fullName?.message}
            {...register("fullName")}
          />
          <TextField
            error={errors.bio ? true : false}
            id="standard-basic"
            label="О себе"
            variant="outlined"
            multiline
            minRows={3}
            maxRows={6}
            helperText={errors.bio?.message}
            {...register("bio")}
          />

          <Button
            type="submit"
            variant="contained"
            disableElevation
            sx={{ width: "fit-content" }}
          >
            Сохранить
          </Button>
        </Stack>
      </form>
    </Box>
  )
}

export default SettingsForm
