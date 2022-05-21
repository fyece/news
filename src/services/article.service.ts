// import { IArticle } from "../types/IArticle"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IArticle } from "../types/IArticle"

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["Article"],
  endpoints: (build) => ({
    getArticles: build.query<IArticle[], number[]>({
      query: ([page = 1, limit = 10]) => ({
        url: `articles/`,
        params: {
          _page: page,
          _limit: limit,
        },
      }),
      providesTags: (result) => ["Article"],
    }),

    // getArticleByAuthor: build.query<IArticle, number>({
    //   query: (authorId) => ({
    //     url: `articles?authorId=${authorId}`,
    //   }),
    //   providesTags: (result) => ["Article"],
    // }),

    createArticle: build.mutation<IArticle, IArticle>({
      query: (article: IArticle) => ({
        url: `articles/`,
        method: "POST",
        body: article,
      }),
      invalidatesTags: ["Article"],
    }),

    deleteArticle: build.mutation<IArticle, IArticle>({
      query: (article: IArticle) => ({
        url: `articles/${article.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Article"],
    }),

    updateArticle: build.mutation<IArticle, IArticle>({
      query: (article: IArticle) => ({
        url: `articles/${article.id}`,
        method: "PUT",
        body: article,
      }),
      invalidatesTags: ["Article"],
    }),
  }),
})
