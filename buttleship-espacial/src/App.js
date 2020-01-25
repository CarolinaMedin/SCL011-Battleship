import React, { Component } from 'react';
import SpaceShip from './components/SpaceShip';





class App extends Component {

  render() {
    return (
      <div className="App">
      <div className="game-Board">
          <SpaceShip />
          <SpaceShip state={{posicion_X: 50, posicion_Y: 50 ,largo: 3, orientacion: "Y"}}/>
          <SpaceShip state={{posicion_X: 20, posicion_Y: 70 ,largo: 2, orientacion: "X"}}/>
          <SpaceShip state={{posicion_X: 90, posicion_Y: 90 ,largo: 1, orientacion: "X"}}/>
      </div>
      <div className="game-Board">
          <SpaceShip state={{posicion_X: 20, posicion_Y: 20 ,largo: 3, orientacion: "Y"}}/>
          <SpaceShip state={{posicion_X: 20, posicion_Y: 70 ,largo: 2, orientacion: "X"}}/>
          <SpaceShip state={{posicion_X: 60, posicion_Y: 10 ,largo: 2, orientacion: "Y"}}/>
          <SpaceShip />
      </div>
    </div>
    );
  }

}

export default App;
