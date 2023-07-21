import { Stack,Box,Typography,Card,CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import React from 'react'
import { demoThumbnailUrl,demoChannelTitle,demoVideoUrl,demoProfilePicture,demoVideoTitle } from '../Utils/constants'
import { Link } from 'react-router-dom'
const Videos = ({videos}) => {
  console.log(videos)
  return (
    <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'start'} gap={2}>
      {
        videos.map((val,i) => {
          return (
            <Box key={i}>
              <Typography sx={{color:"white"}}>{val.title}</Typography>
            </Box>
          )
        })
      }
    </Stack>
  )
}

export default Videos
