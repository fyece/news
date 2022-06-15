import { OutputData } from "@editorjs/editorjs"

// User
export interface IUser {
  id: number
  fullName: string
  bio?: string
  email: string
  token?: string
  createdAt: string
  updatedAt: string
}

export interface ICreateUserDto extends ILoginUserDto {
  fullName: string
}

export interface IUpdateUserDto {
  fullName?: string
  bio?: string
}

export interface IResponseUser {
  id: number
  fullName: string
  email: string
  bio?: string
  token: string
  commentsCount?: number
  createdAt: string
  updatedAt: string
}

// Article
export interface IArticle {
  id: number
  title: string
  description: string
  body: OutputData["blocks"]
  views: number
  user: IResponseUser
  tags?: string
  createdAt: string
  updatedAt: string
}

export interface ICreateArticleDto {
  title: string
  body: OutputData["blocks"]
  tags?: string[]
}

export interface ISearchArticleDto {
  title?: string
  body?: string
  views?: "DESC" | "ASC"
  limit?: number
  take?: number
  tag?: string
  userId?: number
}

// Comment
export interface IComment {
  id: number
  text: string
  article: IArticle
  user: IResponseUser
  createdAt: string
  updatedAt: string
}

export interface ICreateCommentDto {
  articleId: number
  text: string
}

// Auth
export interface ILoginUserDto {
  email: string
  password: string
}
