import { Car } from "../../interfaces";

export const getCars = jest.fn().mockImplementation(
    (page: number, order: string, manufacturer: string, color: string): Promise<Car[]> => {
        return Promise.resolve([
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
        ]);
    }
);

export const getCar = jest.fn().mockImplementation((stockNumber: string) => {
    return Promise.resolve({
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
    });
});

const mock = jest.fn().mockImplementation(() => {
    return {
        getCars: getCars,
        getCar: getCar
    };
});

export default mock;
