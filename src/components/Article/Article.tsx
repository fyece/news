import React, { FC } from "react"
import { IArticle } from "../../types/IArticle"

interface IArticleProps {
  article: IArticle
  update: (article: IArticle) => void
  remove: (article: IArticle) => void
}

const Article: FC<IArticleProps> = ({ article, update, remove }) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation() // Предотвратить всплытие
    remove(article)
  }
  const handleUpdate = (e: React.MouseEvent) => {
    const content = prompt("new content") || "content"
    update({ ...article, content })
  }

  return (
    <div
      style={{ border: "1px solid black", marginBottom: "12px" }}
      onClick={handleUpdate}
    >
      <button onClick={handleDelete}>delete</button>
      <h3>{article.title}</h3>
      <div>{article.author}</div>
      <div>{article.content}</div>
    </div>
  )
}

export default Article
