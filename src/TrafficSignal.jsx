// src/TrafficSignal.jsx

import React from 'react';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import MyContext from './context/context';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

class TrafficSignal extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {
         ({ semaforo, funcSinal })  => (
          <div>
            {
              console.log(funcSinal)
            }
            <div className="button-container">
              <button onClick={() => funcSinal('red')} type="button">
                Red
              </button>
              <button onClick={() => funcSinal('yellow')} type="button">
                Yellow
              </button>
              <button onClick={() => funcSinal('green')} type="button">
                Green
              </button>
            </div>
            <img className="signal" src={renderSignal(semaforo)} alt="" />
          </div>
        )
      }
      </MyContext.Consumer>
    );
  }
}


export default TrafficSignal;
