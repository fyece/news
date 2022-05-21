import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { IArticle } from "../../types/IArticle"

const instance = axios.create({
  baseURL: "http://localhost:5000/",
})

export const fetchArticles = createAsyncThunk(
  "article/fetchArticles",
  async ([page, limit]: number[], thunkAPI) => {
    try {
      const response = await instance.get(
        `articles/?_page=${page}&_limit=${limit}`
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить статьи")
    }
  }
)

export const updateArticle = createAsyncThunk(
  "article/updateArticle",
  async ([articleId, article]: [number, IArticle], thunkAPI) => {
    try {
      const response = await instance.put(`articles/${articleId}`, article)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось обновить статью")
    }
  }
)
export const deleteArticle = createAsyncThunk(
  "article/deleteArticle",
  async (article: IArticle, thunkAPI) => {
    try {
      const response = await instance.delete(`articles/${article.id}`)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось удалить статью")
    }
  }
)
