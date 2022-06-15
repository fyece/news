import React from "react"
import moment from "moment"
import "moment/locale/ru"
import { Typography } from "@mui/material"
import { grey } from "@mui/material/colors"

interface IRelativeDateProps {
  date: string
  fontSize?: number
  color?: string
}

const RelativeDate: React.FC<IRelativeDateProps> = ({
  date,
  fontSize,
  color,
}) => {
  const relativeDate = moment(date).locale("ru").fromNow()
  return (
    <>
      <Typography sx={{ color: color ? color : grey[500], fontSize: fontSize }}>
        {relativeDate}
      </Typography>
    </>
  )
}

export default RelativeDate
