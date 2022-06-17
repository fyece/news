import axios from "axios"
import {
  IArticle,
  ICreateArticleDto,
  ISearchArticleDto,
} from "../../types/types"

const instance = axios.create({
  baseURL: "http://localhost:9999/articles/",
  withCredentials: true,
})

export const ArticleApi = {
  async getArticles() {
    // data contains items and total count of items
    const { data } = await instance.get<{ items: IArticle[]; total: number }>(
      "/"
    )
    return data
  },

  async getArticleById(id: number) {
    const { data } = await instance.get<IArticle>(`${id}`)
    return data
  },

  async getPotularArticles() {
    // data contains items and total count of items
    const { data } = await instance.get<IArticle[]>("popular")
    return data
  },

  async searchArticles(query: ISearchArticleDto) {
    // data contains items and total count of items
    const { data } = await instance.get<{ items: IArticle[]; total: number }>(
      "search",
      {
        params: query,
      }
    )
    return data
  },

  async createArticle(dto: ICreateArticleDto, token: string) {
    const { data } = await instance.post<ICreateArticleDto>(``, dto, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  },

  async editArticle(id: number, dto: ICreateArticleDto, token: string) {
    const { data } = await instance.patch<IArticle>(`${id}`, dto, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  },

  async deleteArticle(id: number, token: string) {
    const { data } = await instance.delete(`${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  },
}
