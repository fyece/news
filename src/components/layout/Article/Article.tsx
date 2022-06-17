import React from "react"
import { Box, Paper, Stack, Typography } from "@mui/material"

import AvatarWithName from "../../common/AvatarWithName/AvatarWithName"
import { IArticle } from "../../../types/types"
import Image from "../../common/Image/Image"
import RelativeDate from "../../common/RelativeDate/RelativeDate"
import EditDeleteButton from "../../common/EditDeleteButton/EditDeleteButton"

interface IArticleProps {
  article: IArticle | null
  isOwner: boolean
}

const Article: React.FC<IArticleProps> = ({ article, isOwner }) => {
  const author = {
    id: article?.user.id || 0,
    fullName: article?.user.fullName || "name",
  }
  return (
    <>
      <Paper elevation={0}>
        <Stack p={2} spacing={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack direction="row" spacing={1}>
              <AvatarWithName user={author} />
              <RelativeDate date={article?.createdAt || ""} />
            </Stack>
            {isOwner ? <EditDeleteButton article={article} /> : null}
          </Box>

          <Typography variant="h5" sx={{ fontWeight: "500" }}>
            {article?.title}
          </Typography>
          <Stack spacing={1}>
            {article?.body.map((obj) => {
              if (obj.type === "paragraph") {
                return (
                  <Typography
                    key={obj.id}
                    dangerouslySetInnerHTML={{ __html: obj.data.text }}
                  />
                )
              }
              if (obj.type === "simpleImage") {
                return <Image src={obj.data.url} />
              }
            })}
          </Stack>
        </Stack>
      </Paper>
    </>
  )
}

export default Article
