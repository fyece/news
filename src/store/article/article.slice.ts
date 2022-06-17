import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IArticle } from "../../types/types"
import {
  deleteArticle,
  fetchArticles,
  getArticleById,
  searchArticle,
} from "./article.actions"

interface IArticleState {
  articles: IArticle[]
  searchingArticles: IArticle[]
  currentArticle: IArticle | null
  total: number
  isLoading: boolean
  error: string
}

const initialState: IArticleState = {
  articles: [],
  searchingArticles: [],
  currentArticle: null,
  total: 0,
  isLoading: false,
  error: "",
}

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchArticles.fulfilled.type]: (
      state,
      action: PayloadAction<{ items: IArticle[]; total: number }>
    ) => {
      state.isLoading = false
      state.error = ""
      state.articles = action.payload.items
      state.total = action.payload.total
    },
    [fetchArticles.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchArticles.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },

    [getArticleById.fulfilled.type]: (
      state,
      action: PayloadAction<IArticle>
    ) => {
      state.isLoading = false
      state.error = ""
      state.currentArticle = action.payload
    },
    [getArticleById.pending.type]: (state) => {
      state.isLoading = true
    },
    [getArticleById.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },

    [searchArticle.fulfilled.type]: (
      state,
      action: PayloadAction<{ items: IArticle[]; total: number }>
    ) => {
      state.isLoading = false
      state.error = ""
      state.searchingArticles = action.payload.items
    },
    [searchArticle.pending.type]: (state) => {
      state.isLoading = true
    },
    [searchArticle.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },

    [deleteArticle.fulfilled.type]: (state) => {
      state.isLoading = false
      state.error = ""
    },
    [deleteArticle.pending.type]: (state) => {
      state.isLoading = true
    },
    [deleteArticle.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

const articleReducer = articleSlice.reducer

export default articleReducer
