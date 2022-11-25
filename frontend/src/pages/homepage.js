import React from 'react'
import {Grid} from '@mui/material';

import MediaCard from '../components/MediaCard';
import MediaComponent from '../components/MediaComponent';
import Media_Card from '../components/Media_Card';
function Homepage() {
  return (
      <Grid className='backGround'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        {/* <img src = {image}></img> */}
        <Grid align = "center">
        
          <h1>Test your self with random quizzes</h1>
        </Grid>
        <Grid align = "center">
          <h2>What you can do?</h2>
        </Grid>
        <Grid className='GridLayout'>
          <MediaCard />
        </Grid>
        <Grid className='Layout'>
        <MediaComponent />
        </Grid>
        <Grid className='Layout_1'>
          <Media_Card />
        </Grid>
      </Grid>
  );
}


export default Homepage