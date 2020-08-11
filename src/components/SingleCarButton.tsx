import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { SingleCarButtonProps } from '../interfaces';
import React from 'react';
import { useDispatch } from "react-redux";
import { activate } from "../redux/actions";

function SingleCarButton(props: SingleCarButtonProps) {
    const history = useHistory();
    const dispatch = useDispatch();
    return (<Button color="primary" onClick={() => {
        dispatch(activate(props.car));
        history.push(`/car/${props.car.stockNumber}`);
    }}>Details</Button>)
}

export default SingleCarButton;