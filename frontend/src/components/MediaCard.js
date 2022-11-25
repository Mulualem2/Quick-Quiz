import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// IMPORT IMAGES
import back_ground from '../images/back_ground.jpg'

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: 5 }}>
      <CardMedia
        component="img"
        height="140"
        image={back_ground}
        alt="Quiz"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Take general knowledge quizzes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Take different questions by specifying the category and
          check your general knowledge in that field
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}