import { alpha, Box, ImageListItem, styled } from "@mui/material"
import React from "react"

interface IImageProps {
  src: string
  width?: number
  height?: number
}

const ImageContainer = styled(Box, {
  name: "ImageContainer",
})(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.black, 0.06),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const Image: React.FC<IImageProps> = ({ src, width, height }) => {
  return (
    // <Box
    //   sx={{
    //     backgroundColor: "#eeeeee",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    <ImageContainer>
      <ImageListItem>
        <img
          src={`${src}?w=${width}&h=${height}&fit=crop&auto=format`}
          srcSet={`${src}?w=${width}&h=${height}&fit=crop&auto=format&dpr=2 2x`}
          loading="lazy"
        />
      </ImageListItem>
    </ImageContainer>
  )
}

export default Image
