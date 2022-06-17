import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IComment } from "../../types/types"
import {
  createComment,
  editComment,
  getComments,
  removeComment,
} from "./comment.actions"

interface ICommentState {
  comments: IComment[]
  isLoading: boolean
  error: string
}

const initialState: ICommentState = {
  comments: [],
  isLoading: false,
  error: "",
}

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [getComments.fulfilled.type]: (
      state,
      action: PayloadAction<IComment[]>
    ) => {
      state.comments = action.payload
      state.isLoading = false
      state.error = ""
    },
    [getComments.pending.type]: (state) => {
      state.isLoading = true
    },
    [getComments.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = true
      console.log(action.payload)
      state.error = action.payload
    },

    [createComment.fulfilled.type]: (
      state,
      action: PayloadAction<IComment[]>
    ) => {
      state.comments = action.payload
      state.isLoading = false
      state.error = ""
    },
    [createComment.pending.type]: (state) => {
      state.isLoading = true
    },
    [createComment.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = true
      state.error = action.payload
    },

    [removeComment.fulfilled.type]: (
      state,
      action: PayloadAction<IComment[]>
    ) => {
      state.comments = action.payload
      state.isLoading = false
      state.error = ""
    },
    [removeComment.pending.type]: (state) => {
      state.isLoading = true
    },
    [removeComment.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = true
      state.error = action.payload
    },

    [editComment.fulfilled.type]: (
      state,
      action: PayloadAction<IComment[]>
    ) => {
      state.comments = action.payload
      state.isLoading = false
      state.error = ""
    },
    [editComment.pending.type]: (state) => {
      state.isLoading = true
    },
    [editComment.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = true
      state.error = action.payload
    },
  },
})

const commentReducer = commentSlice.reducer

export default commentReducer
