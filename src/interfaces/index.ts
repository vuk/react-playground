import CarService from "../services/car.service";
import { ActionCreator } from "redux";

export interface Car {
    stockNumber: number;
    manufacturerName: string;
    modelName: string;
    color: string;
    mileage: Mileage;
    fuelType: string;
    pictureUrl: string;
}

interface Mileage {
    number: number;
    unit: string;
}

export interface CarListProps {
    carService: CarService;
    cars: Car[];
    car?: Car;
    color?: string;
    page?: number;
    classes?: any;
    manufacturer?: string;
    addCarsAction: ActionCreator<CarAction>;
    setPageAction: ActionCreator<CarAction>;
    activateAction: ActionCreator<CarAction>;
    colorAction: ActionCreator<CarAction>;
    manufacturerAction: ActionCreator<CarAction>;
}

export interface CarListState {
    cars: Car[],
    manufacturer: string;
    color: string;
}

export interface State {
    manufacturer: string;
    color: string;
    cars: Car[];
    car: Car | null;
    page: number;
}

export interface CarAction {
    type: string;
    payload: any;
}

export interface SingleCarButtonProps {
    car: Car;
}