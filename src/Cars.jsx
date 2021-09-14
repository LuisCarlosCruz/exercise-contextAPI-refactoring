// src/Cars.jsx

import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import MyContext from './context/context';

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
  return (
    <MyContext.Consumer>
      {
        ({ redCar, yellowCar, blueCar, func }) => (
          <div>
            <div>
              <img
                className={redCar ? 'car-right' : 'car-left'}
                src={carRed}
                alt="red car"
              />
              <button
                onClick={() => func('redCar', !redCar)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={blueCar ? 'car-right' : 'car-left'}
                src={carBlue}
                alt="blue car"
              />
              <button
                onClick={() => func('blueCar', !blueCar)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={yellowCar ? 'car-right' : 'car-left'}
                src={carYellow}
                alt="yellow car"
                />
              <button
                onClick={() => func('yellowCar', !yellowCar)}
                type="button"
              >
                Move
              </button>
            </div>
          </div>
        )
      }
    </MyContext.Consumer>
    );
  }
}

Cars.contextType = MyContext;

export default Cars;
