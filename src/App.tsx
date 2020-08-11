import React from 'react';
import './App.css';
import { Grid, Container, Typography } from '@material-ui/core';
import { CarService } from './services/car.service';
import CarList from './components/CarList';
import { useStyles } from './styles';

const carService = new CarService('https://auto1-mock-server.herokuapp.com');

function App() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3} className={classes.table}>
          <Typography variant="h1" component="h1" >Car listings</Typography>
          <CarList carService={carService} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
