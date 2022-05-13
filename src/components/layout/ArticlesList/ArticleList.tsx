import React from "react"
import { articleApi } from "../../../services/article.service"
import Article from "../../Article/Article"
import { IArticle } from "../../../types/IArticle"

const ArticleList = () => {
  const [updateArticle, {}] = articleApi.useUpdateArticleMutation()
  const [removeArticle, {}] = articleApi.useDeleteArticleMutation()
  const { data, error, isLoading } = articleApi.useGetAllArticlesQuery(100)
  const articlesElements = data?.map((article) => (
    <Article
      key={article.id}
      article={article}
      update={updateArticle}
      remove={removeArticle}
    />
  ))

  const [createArticle, { error: createError }] =
    articleApi.useCreateArticleMutation()
  const handleCreateArticle = async () => {
    const authorId = Number(prompt("authorId"))
    const title = prompt("title") || "untilted"
    const content = prompt("content") || "empty"
    const author = prompt("atuthor name") || "unknown"
    await createArticle({ authorId, title, content, author } as IArticle)
  }

  return (
    <>
      <button onClick={handleCreateArticle}>create article</button>
      {isLoading ? <div>`LOADING-LOADING-LOADING`</div> : null}
      {error ? <div>error</div> : null}
      {articlesElements}
    </>
  )
}

export default ArticleList
