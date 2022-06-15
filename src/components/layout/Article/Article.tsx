import React from "react"
import { Paper, Stack, styled, Typography } from "@mui/material"

import AvatarWithName from "../../common/AvatarWithName/AvatarWithName"
import { IArticle } from "../../../types/types"
import Image from "../../common/Image/Image"
import RelativeDate from "../../common/RelativeDate/RelativeDate"

const HeaderTypography = styled(Typography)({
  fontWeight: "500",
})

interface IArticleProps {
  article: IArticle | null
}

const Article: React.FC<IArticleProps> = ({ article }) => {
  const author = {
    id: article?.user.id || 0,
    fullName: article?.user.fullName || "name",
  }
  return (
    <>
      <Paper elevation={0}>
        <Stack p={2} spacing={2}>
          <Stack direction="row" spacing={1}>
            <AvatarWithName user={author} />
            <RelativeDate date={article?.createdAt || ""} />
          </Stack>
          <HeaderTypography variant="h5">{article?.title}</HeaderTypography>
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
