import React from 'react';
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
    }
  }

  moveCars = (car, side) => {
    this.setState({
      [car]: side,
    });
  }
  
  render() {
    const valueProvider = { ...this.state, func: this.moveCars  }
    return (
      <MyContext.Provider value={ valueProvider }>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
