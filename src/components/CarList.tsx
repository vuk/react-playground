import React, { ReactElement, ChangeEvent } from 'react';
import { connect } from 'react-redux'
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Container, CircularProgress, Paper, TextField } from '@material-ui/core';
import * as actions from '../redux/actions';
import { Car, CarListProps, State, CarListState } from '../interfaces';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles';
import SingleCarButton from '../components/SingleCarButton';

export class CarList extends React.Component<CarListProps, CarListState> {

    async componentDidMount() {
        this.props.addCarsAction(await this.props.carService.getCars(1, 'asc'));
    }

    renderCars(): ReactElement {
        return (
            <TableContainer component={Paper} className={this.props.classes.table}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Stock number</TableCell>
                            <TableCell>Manufacturer</TableCell>
                            <TableCell>Model</TableCell>
                            <TableCell>Color</TableCell>
                            <TableCell>Fuel Type</TableCell>
                            <TableCell>Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key='control'>
                            <TableCell component="th" scope="row"></TableCell>
                            <TableCell>
                                <TextField id="manufacturer" label="Manufacturer" variant="standard" size="small" onBlur={async (e: ChangeEvent) => {
                                    this.props.manufacturerAction((e.target as any).value);
                                    this.props.addCarsAction(await this.props.carService.getCars(1, 'asc', (e.target as any).value), this.props.color);
                                }} />
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell>
                                <TextField id="color" label="Color" variant="standard" size="small" onBlur={async (e: ChangeEvent) => {
                                    this.props.colorAction((e.target as any).value);
                                    this.props.addCarsAction(await this.props.carService.getCars(1, 'asc', this.props.manufacturer, (e.target as any).value));
                                }} />
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        {this.props.cars.map((row) => (
                            <TableRow key={row.stockNumber}>
                                <TableCell component="th" scope="row">
                                    {row.stockNumber}
                                </TableCell>
                                <TableCell>{row.manufacturerName}</TableCell>
                                <TableCell>{row.modelName}</TableCell>
                                <TableCell>{row.color}</TableCell>
                                <TableCell>{row.fuelType}</TableCell>
                                <TableCell><SingleCarButton car={row} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        );
    }

    renderLoading(): ReactElement {
        return (
            <Container>
                <CircularProgress />
            </Container>
        );
    }

    render(): ReactElement {
        return this.props ? this.renderCars() : this.renderLoading();
    }
}

const mapStateToProps = (state: State) => {
    return {
        cars: state.cars,
        manufacturer: state.manufacturer,
        color: state.color
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        addCarsAction: (cars: Car[]) => dispatch(actions.addCars(cars)),
        activateAction: (car: Car) => dispatch(actions.activate(car)),
        manufacturerAction: (manufacturer: string) => dispatch(actions.manufacturer(manufacturer)),
        colorAction: (color: string) => dispatch(actions.color(color)),
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CarList));