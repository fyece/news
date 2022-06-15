import axios from "axios"
import { IUser } from "../../types/types"

const instance = axios.create({
  baseURL: "http://localhost:9999/",
})

export const UserApi = {
  async getUsers() {
    const { data } = await instance.get<IUser[]>("users")
    return data
  },

  async getUserById(id: number) {
    const { data } = await instance.get<IUser>(`users/${id}`)
    return data
  },

  //! сделать query поиск
  async searchUsers(dto: any) {
    const { data } = await instance.get<IUser[]>(`users/search`, dto)
    return data
  },

  async getMyProfile() {
    const { data } = await instance.get<IUser>("users/me")
    return data
  },

  async updateMyProfile(dto: { fullName: string; bio: string }) {
    const { data } = await instance.patch<IUser>("users/me", dto)
    return data
  },
}
