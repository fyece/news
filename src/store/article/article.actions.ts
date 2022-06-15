import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

import { ArticleApi } from "../../utils/api/article.api"
import {
  IArticle,
  ICreateArticleDto,
  ISearchArticleDto,
} from "../../types/types"

const instance = axios.create({
  baseURL: "http://localhost:9999/",
  withCredentials: true,
})

export const fetchArticles = createAsyncThunk(
  "article/fetchArticles",
  async (_, thunkAPI) => {
    try {
      const data = await ArticleApi.getArticles()
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить статьи")
    }
  }
)

export const getArticleById = createAsyncThunk(
  "article/getArticleById",
  async (id: number, thunkAPI) => {
    try {
      const data = await ArticleApi.getArticleById(id)
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить статью")
    }
  }
)

export const searchArticle = createAsyncThunk(
  "article/searchArticle",
  async (query: ISearchArticleDto, thunkAPI) => {
    try {
      const data = await ArticleApi.searchArticles(query)
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить статью")
    }
  }
)

export const createArticle = createAsyncThunk(
  "article/createArticle",
  async ([dto, token]: [ICreateArticleDto, string], thunkAPI) => {
    try {
      const data = await ArticleApi.createArticle(dto, token)
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось создать статью")
    }
  }
)

export const updateArticle = createAsyncThunk(
  "article/updateArticle",
  async (
    [articleId, article, token]: [number, ICreateArticleDto, string],
    thunkAPI
  ) => {
    try {
      const data = ArticleApi.editArticle(articleId, article, token)
      return data
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
