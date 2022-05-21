import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IArticle } from "../../types/IArticle"
import { deleteArticle, fetchArticles, updateArticle } from "./article.actions"

function findIndexByItemId(array: IArticle[], id: number) {
  const el = array.filter((item) => item.id === id)
  return array.indexOf(el[0])
}

interface IArticleState {
  articles: IArticle[]
  isLoading: boolean
  error: string
}

const initialState: IArticleState = {
  articles: [],
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
      action: PayloadAction<IArticle[]>
    ) => {
      state.isLoading = false
      state.error = ""
      state.articles = action.payload
    },
    [fetchArticles.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchArticles.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },

    [updateArticle.fulfilled.type]: (
      state,
      action: PayloadAction<IArticle>
    ) => {
      const articleIndex = findIndexByItemId(state.articles, action.payload.id)
      state.isLoading = false
      state.error = ""
      state.articles[articleIndex] = action.payload
    },
    [updateArticle.pending.type]: (state) => {
      state.isLoading = true
    },
    [updateArticle.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },

    [deleteArticle.fulfilled.type]: (state, action: PayloadAction<number>) => {
      const index = findIndexByItemId(state.articles, action.payload)
      state.isLoading = false
      state.error = ""
      state.articles = state.articles.splice(index, 1)
    },
  },
})

const articleReducer = articleSlice.reducer

export default articleReducer
