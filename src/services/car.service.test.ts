import CarService from './car.service';
import axios from 'axios';
jest.mock('axios');

describe('Car service tests', () => {
    let carService: CarService;
    let getSpy = jest.fn();
    axios.get = getSpy;

    beforeEach(() => {
        carService = new CarService('https://example.com');
    });

    describe('Get cars method', () => {
        beforeEach(() => {
            getSpy.mockReset();
            getSpy.mockReturnValue({
                data: {
                    cars: [
                        {
                            color: 'red',
                            fuelType: 'Diesel',
                            manufacturerName: 'Audi',
                            mileage: {
                                number: 100000,
                                unit: 'km'
                            },
                            modelName: 'A6',
                            pictureUrl: 'https://example.com/audi.jpg',
                            stockNumber: 123
                        },
                        {
                            color: 'silver',
                            fuelType: 'Diesel',
                            manufacturerName: 'Mercedes-Benz',
                            mileage: {
                                number: 45000,
                                unit: 'km'
                            },
                            modelName: 'E320',
                            pictureUrl: 'https://example.com/merc.jpg',
                            stockNumber: 125
                        },
                    ]
                }
            });
        })

        it('should get cars by manufacturer and color', async () => {
            let cars = await carService.getCars(1, 'asc', 'Audi', 'red');
            expect(cars.length).toEqual(2);
            expect(getSpy).toHaveBeenCalledWith('https://example.com/api/cars?sort=asc&page=1&manufacturer=Audi&color=red');
        });

        it('should get cars by color', async () => {
            let cars = await carService.getCars(1, 'asc', null, 'red');
            expect(cars.length).toEqual(2);
            expect(getSpy).toHaveBeenCalledWith('https://example.com/api/cars?sort=asc&page=1&color=red');
        });

        it('should get cars by manufacturer', async () => {
            let cars = await carService.getCars(1, 'asc', 'Audi');
            expect(cars.length).toEqual(2);
            expect(getSpy).toHaveBeenCalledWith('https://example.com/api/cars?sort=asc&page=1&manufacturer=Audi');
        });

        it('should get all cars', async () => {
            let cars = await carService.getCars();
            expect(cars.length).toEqual(2);
            expect(getSpy).toHaveBeenCalledWith('https://example.com/api/cars?sort=asc&page=1');
        });

        it('should get all cars on first page', async () => {
            let cars = await carService.getCars(1, 'asc');
            expect(cars.length).toEqual(2);
            expect(getSpy).toHaveBeenCalledWith('https://example.com/api/cars?sort=asc&page=1');
        });
    });

    describe('Get car method', () => {
        beforeEach(() => {
            getSpy.mockReset();
            getSpy.mockReturnValue({
                data: {
                    car: {
                        color: 'red',
                        fuelType: 'Diesel',
                        manufacturerName: 'Audi',
                        mileage: {
                            number: 100000,
                            unit: 'km'
                        },
                        modelName: 'A6',
                        pictureUrl: 'https://example.com/audi.jpg',
                        stockNumber: 123
                    }
                }
            });
        })

        it('should get cars by manufacturer and color', async () => {
            await carService.getCar(123);
            expect(getSpy).toHaveBeenCalledWith('https://example.com/api/cars/123');
        });
    })
});