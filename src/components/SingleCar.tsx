import React from 'react';
import { useStyles } from "../styles";
import { Container, Typography, List, ListItem, ListItemText, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { State } from '../interfaces';
import { Redirect, useHistory } from 'react-router-dom';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

function SingleCar() {
    const car = useSelector((state: State) => state.car);
    const history = useHistory();
    const classes = useStyles();
    return car ? (
        <Container className={classes.table}>
            <Typography variant="h1" component="h1">
                <Button onClick={() => {
                    return history.goBack();
                }}><ArrowBackRoundedIcon /> Back</Button>
                {`${car.manufacturerName} ${car.modelName}`}
            </Typography>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <img alt={car.modelName} src={car.pictureUrl} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary={`Color: ${car.color}`} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary={`Mileage: ${car.mileage.number} ${car.mileage.unit}`} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary={`Fuel Type: ${car.fuelType}`} />
                </ListItem>
            </List>
        </Container>
    ) : (<Redirect to="/" />);
}

export default SingleCar;
