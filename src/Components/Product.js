import { Container, Grid } from "@material-ui/core";
import React from "react";
import './App.css';

export default function Prod(){
  return(
  <Container sx={{marginY:25}} id='cont'>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
      <img src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg' id='imge'></img></Grid>
      
      <Grid item xs={12} sm={6} md={3}>
      <img src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg' id='imge'></img> </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <img src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg' id='imge'></img>
      </Grid>
      
      
    </Grid>
  </Container>
  );
}