import { createContext } from 'react';

const defaultProvider = {
  redCar: false,
  blueCar: false,
  yellowCar: false,
}

const MyContext = createContext(defaultProvider);

export default MyContext;
