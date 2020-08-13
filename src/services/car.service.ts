import axios from 'axios';
import { Car } from '../interfaces';

export default class CarService {
    private baseUrl: string;
    private pageCount: number = 0;
    private totalCount: number = 0;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getCars(page: number = 1, sort: string = 'asc', manufacturer?: string, color?: string): Promise<Car[]> {
        let url = `${this.baseUrl}/api/cars?sort=${sort}&page=${page}`;
        if (manufacturer) url = `${url}&manufacturer=${manufacturer}`;
        if (color) url = `${url}&color=${color}`;
        let response = await axios.get(url);
        this.pageCount = response.data.totalPageCount;
        this.totalCount = response.data.totalCarsCount;
        return (response).data.cars;
    }

    async getCar(stockNumber: number): Promise<Car> {
        let url = `${this.baseUrl}/api/cars/${stockNumber}`;
        return (await axios.get(url)).data.car;
    }

    getPageCount() {
        return this.pageCount;
    }

    getTotalCount() {
        return this.totalCount;
    }
}