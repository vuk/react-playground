import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import CarService from "./services/car.service";
import { State } from './interfaces';
import { createStore } from 'redux';

jest.mock("./services/car.service");
const store = createStore(() => ({
  manufacturer: '',
  color: '',
  cars: [],
  car: null
}))

describe('App Component tests', () => {
  beforeEach(() => {
    (CarService as any).mockClear();
  });
  it('renders learn react link', async () => {
    const { getByText, getByTestId } = await render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const heading = getByText(/car listings/i);
    const manufacturer = getByTestId('manufacturer');
    expect(heading).toBeInTheDocument();
    fireEvent.change(manufacturer, { target: { value: "Audi" } });
    await waitFor(() => expect(screen.getByText("Stock number")));
  });
});