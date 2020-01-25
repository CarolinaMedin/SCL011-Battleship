import React, { Component } from 'react';
import SpaceShip from './components/SpaceShip';





class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="game-Board">
            <SpaceShip />
            <SpaceShip state={{coordenada_X: 50, coordenada_Y: 50 ,largo: 3, orientacion: "V"}}/>
            <SpaceShip state={{coordenada_X: 20, coordenada_Y: 70 ,largo: 2, orientacion: "H"}}/>
            <SpaceShip state={{coordenada_X: 90, coordenada_Y: 90 ,largo: 1, orientacion: "H"}}/>
        </div>
        <div className="game-Board">
            <SpaceShip state={{coordenada_X: 20, coordenada_Y: 20 ,largo: 3, orientacion: "V"}}/>
            <SpaceShip state={{coordenada_X: 20, coordenada_Y: 70 ,largo: 2, orientacion: "H"}}/>
            <SpaceShip state={{coordenada_X: 60, coordenada_Y: 10 ,largo: 2, orientacion: "V"}}/>
            <SpaceShip />
        </div>
      </div>
    );
  }

}

export default App;
