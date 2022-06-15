import axios from "axios"
import {
  ICreateUserDto,
  ILoginUserDto,
  IResponseUser,
  IUpdateUserDto,
} from "../../types/types"

const instance = axios.create({
  baseURL: "http://localhost:9999/",
})

export const AuthApi = {
  async register(dto: ICreateUserDto) {
    const { data } = await instance.post<
      ICreateUserDto,
      { data: IResponseUser }
    >("auth/register", dto)
    return data
  },

  async login(dto: ILoginUserDto) {
    const { data } = await instance.post<
      ILoginUserDto,
      { data: IResponseUser }
    >("auth/login", dto)
    return data
  },

  async getMe(token: string) {
    const { data } = await instance.get<IResponseUser>("users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  },

  async updateMe(token: string, dto: IUpdateUserDto) {
    const { data } = await instance.patch<IResponseUser>("users/me", dto, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  },
}
