import { Car } from '../../interfaces';

export const ADD_CARS = 'ADD_CARS';
export const PICK_CAR = 'PICK_CAR';
export const PICK_MANUFACTURER = 'PICK_MANUFACTURER';
export const PICK_COLOR = 'PICK_COLOR';
export const PICK_PAGE = 'PICK_PAGE';
export const RESET = 'RESET';

export const addCars = (cars: Car[]) => {
    return {
        type: ADD_CARS,
        payload: cars
    }
};

export const activate = (car: Car) => {
    return {
        type: PICK_CAR,
        payload: car
    }
}

export const manufacturer = (manufacturer: string) => {
    return {
        type: PICK_MANUFACTURER,
        payload: manufacturer
    }
}

export const color = (color: string) => {
    return {
        type: PICK_COLOR,
        payload: color
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

export const setPage = (page: number) => {
    return {
        type: PICK_PAGE,
        payload: page
    }
}