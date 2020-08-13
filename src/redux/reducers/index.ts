import { State, CarAction } from "../../interfaces";
import { PICK_CAR, ADD_CARS, PICK_MANUFACTURER, PICK_COLOR, RESET, PICK_PAGE } from "../actions";

const initialState: State = {
    manufacturer: '',
    color: '',
    cars: [],
    car: null,
    page: 1
};

const reducer = (state = initialState, action: CarAction) => {
    switch (action.type) {
        case PICK_CAR: return {
            ...state,
            car: action.payload
        }
        case ADD_CARS: return {
            ...state,
            cars: action.payload,
        }
        case PICK_MANUFACTURER: return {
            ...state,
            manufacturer: action.payload,
        }
        case PICK_COLOR: return {
            ...state,
            color: action.payload,
        }
        case PICK_PAGE: return {
            ...state,
            page: action.payload
        }
        case RESET: return {
            ...state,
            color: '',
            manufacturer: '',
            car: null,
            page: 1
        }
        default: return state
    }
}
export default reducer;