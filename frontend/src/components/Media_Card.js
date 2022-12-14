import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// IMPORT IMAGES
import back_ground from '../images/back_ground.jpg'

export default function Media_Card() {
  return (
    <Card sx={{ maxWidth: 345, margin: 5 }}>
      <CardMedia
        component="img"
        height="140"
        image={back_ground}
        width="100%"
        alt="Quiz"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Try others' quiz pack
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Try other users' created quiz packs and give your rating
          on their quiz pack
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}