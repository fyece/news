import axios from "axios"
import { IComment, ICreateCommentDto } from "../../types/types"

const instance = axios.create({
  baseURL: "http://localhost:9999",
})

export const CommentApi = {
  async getComments(articleId: number) {
    const { data } = await instance.get<IComment[]>("/comments", {
      params: { articleId: articleId },
    })
    return data
  },

  async createComment(dto: ICreateCommentDto, token: string) {
    const { data } = await instance.post<ICreateCommentDto, { data: IComment }>(
      `/comments`,
      dto,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return data
  },

  async remove(id: number, token: string) {
    return instance.delete<number, { data: IComment }>(`/comments/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },

  async edit(id: number, dto: IComment, token: string) {
    console.log()

    return instance.patch<number, { data: IComment }>(`/comments/${id}`, dto, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
}
