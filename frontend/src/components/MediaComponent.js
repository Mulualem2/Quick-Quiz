import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaComponent() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="../images/back_ground.jpg"
        alt="Quiz"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Create your own quiz pack
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Create your own quiz pack, with your own questions on your own
        category & description 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}