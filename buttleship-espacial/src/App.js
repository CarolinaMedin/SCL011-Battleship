import React, { Component } from 'react';
import Spaceship from './Spaceship';
// import './App.css';



const initialState = {
  // food: getRandomCoordinates(),
  // speed: 200,
  // direction: 'RIGHT',
  posicion: [50,50],
  largo: 4,
  orientacion: "X"
}



class App extends Component {

  state = initialState;


 render() {
    return (
      <div>
      <div className="game-Board">
        <Spaceship spaceShipState={this.state}/>
        // <Spaceship spaceShipState={this.state}/>
      </div>
      <div className="game-Board">
      </div>
    </div>
    );
  }

}

export default App;
