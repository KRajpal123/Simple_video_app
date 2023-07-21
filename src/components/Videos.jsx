
import { Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import React from "react";
import {
  demoThumbnailUrl,
  demoChannelTitle,
  demoVideoUrl,
  demoProfilePicture,
  demoVideoTitle,
} from "../Utils/constants";
import { Link } from "react-router-dom";
const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>
      {videos.map((val, i) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={i}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={val.thumbnailUrl}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               {val.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
           <Link to={val.videoUrl}>
           <Button size="small" color="primary">
             Go
            </Button>
           </Link>
          </CardActions>
        </Card>
        );
      })}
    </Stack>
  );
};

export default Videos;
