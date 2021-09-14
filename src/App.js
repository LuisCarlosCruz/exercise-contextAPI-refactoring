import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import MyContext from './context/context';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
      semaforo: 'red',
    }
  }

  moveCars = (car, side) => {
    this.setState({
      [car]: side,
    });
  }

  alteraSinal = (cor) => {
    this.setState({
      semaforo: cor,
    });
  }

  render() {
    const value = { ...this.state, func: this.moveCars, funcSinal: this.alteraSinal };
    return (
      <MyContext.Provider value={ value }>
        <div className="container">
          <Cars />
          <TrafficSignal />
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
