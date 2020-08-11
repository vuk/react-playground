import axios from 'axios';
import { Car } from '../interfaces';

export class CarService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getCars(page: number = 1, sort: string = 'asc', manufacturer?: string, color?: string): Promise<Car[]> {
        let url = `${this.baseUrl}/api/cars?sort=${sort}&page=${page}`;
        if (manufacturer) url = `${url}&manufacturer=${manufacturer}`;
        if (color) url = `${url}&color=${color}`;
        return (await axios.get(url)).data.cars;
    }

    async getCar(stockNumber: number): Promise<Car> {
        let url = `${this.baseUrl}/api/cars/${stockNumber}`;
        return (await axios.get(url)).data.car;
    }
}