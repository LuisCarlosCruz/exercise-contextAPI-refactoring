import { createContext } from 'react';

const inicialState = {
  redCar: false,
  blueCar: false,
  yellonCar: false,
}

const MyContext = createContext(inicialState);

export default MyContext;
