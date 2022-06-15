import { createAsyncThunk } from "@reduxjs/toolkit"
import { IComment, ICreateCommentDto } from "../../types/types"
import { CommentApi } from "../../utils/api/comment.api"

export const getComments = createAsyncThunk(
  "comment/getCommetns",
  async (articleId: number, thunkAPI) => {
    try {
      const data = await CommentApi.getComments(articleId)

      return data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить комментарии")
    }
  }
)

export const createComment = createAsyncThunk(
  "comment/createComment",
  async (
    [dto, articleId, token]: [ICreateCommentDto, number, string],
    thunkAPI
  ) => {
    try {
      await CommentApi.createComment(dto, token)
      const data = await CommentApi.getComments(articleId)
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось создать комментарий")
    }
  }
)

export const removeComment = createAsyncThunk(
  "comment/removeComment",
  async ([comment, token]: [IComment, string], thunkAPI) => {
    try {
      await CommentApi.remove(comment.id, token)
      const data = await CommentApi.getComments(comment.article.id)
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось удалить комментарий")
    }
  }
)
