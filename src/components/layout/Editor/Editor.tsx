import React from "react"
import EditorJS, { OutputData } from "@editorjs/editorjs"
import Header from "@editorjs/header"
import SimpleImage from "@editorjs/simple-image"
import { Box } from "@mui/material"

interface EditorProps {
  onChange: (blocks: OutputData["blocks"]) => void
  startBlocks: OutputData["blocks"]
}

const Editor: React.FC<EditorProps> = ({ onChange, startBlocks }) => {
  console.log(startBlocks)

  React.useEffect(() => {
    const editor = new EditorJS({
      holder: "editor",
      placeholder: "Введите текст вашей статьи",
      tools: {
        // header: Header,

        simpleImage: SimpleImage,
      },
      data: {
        blocks: startBlocks,
      },
      async onChange() {
        const { blocks } = await editor.save()
        onChange(blocks)
      },
    })

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy()
        })
        .catch((e) => console.error("Error editor cleanup", e))
    }
  }, [])
  // было так
  //
  // }, [startBlocks, onChange])

  return <Box id="editor" sx={{ minWidth: "480px", maxWidth: "640px" }} />
}

export default Editor
