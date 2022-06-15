import React, { useEffect, useState } from "react"
import Editor from "../../components/layout/Editor/Editor"
import { Box, Button, styled, TextField } from "@mui/material"
import { OutputData } from "@editorjs/editorjs"
import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux"
import {
  createArticle,
  getArticleById,
  updateArticle,
} from "../../store/article/article.actions"
import { useCookies } from "react-cookie"
import { IArticle } from "../../types/types"
import { Navigate, useMatch, useNavigate } from "react-router"

interface IWriteFormProps {
  data?: IArticle | null
}

export const WriteForm: React.FC<IWriteFormProps> = ({ data }) => {
  const dispatch = useAppDispatch()

  const isNewArticle = data ? false : true

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = React.useState(false)
  const [title, setTitle] = useState(data?.title || "")
  const [blocks, setBlocks] = useState<OutputData["blocks"]>([])
  const token = useAppSelector((state) => state.authReducer.user?.token) || ""

  useEffect(() => {
    setTitle(data?.title || "")
    setBlocks(data?.body || [])
  }, [data])

  const onAddArticle = async () => {
    setIsLoading(true)

    if (isNewArticle) {
      await dispatch(createArticle([{ title, body: blocks }, token]))
      navigate(`../`, { replace: true })
    } else {
      await dispatch(
        updateArticle([data?.id || 0, { title, body: blocks }, token])
      )
      navigate(`../`, { replace: true })
    }

    setIsLoading(false)
  }
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <TextField
          variant="standard"
          fullWidth
          placeholder="Введите заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ fontSize: "32px" }}
          InputProps={{
            style: { fontSize: 28, fontWeight: 500 }, // пересмотреть fontSize
            disableUnderline: true,
          }}
        />
        <Box sx={{ overflow: "hidden", width: "100%" }}>
          <Editor startBlocks={blocks} onChange={(arr) => setBlocks(arr)} />
        </Box>
      </Box>
      <Button
        disabled={isLoading || blocks.length === 0 || !title}
        onClick={onAddArticle}
      >
        {isNewArticle ? "Опубликовать" : "Изменить"}
      </Button>
    </>
  )
}

const EditorPage = () => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector((state) => state.authReducer.user?.id)
  const articleId = Number(useMatch("editor/:id")?.params.id) || 0

  React.useEffect(() => {
    dispatch(getArticleById(articleId))
  }, [dispatch, articleId])

  const article = useAppSelector((state) => state.articleReducer.currentArticle)

  return (
    <>
      {/* {data?.user.id !== userId ? (
        <Navigate to="/" />
      ) : (
        <Box sx={{ maxWidth: "640px", minWidth: "100%" }}>
          <WriteForm data={data} />
        </Box>
      )} */}
      <Box sx={{ maxWidth: "640px", minWidth: "100%" }}>
        <WriteForm data={article} />
      </Box>
    </>
  )
}

export default EditorPage
