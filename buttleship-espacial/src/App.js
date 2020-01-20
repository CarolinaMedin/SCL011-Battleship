import React, { Component } from 'react';
import Spaceship from './Spaceship';
// import './App.css';



const initialState = {
  // food: getRandomCoordinates(),
  // speed: 200,
  // direction: 'RIGHT',
  spaceShip1: [  // coordenadas de game-Board, pasos de 10%
    [0,0],
    4,
    "X"
  ],
  spaceShip2: [  // coordenadas de game-Board, pasos de 10%
    [50,90],
    [60,90]
  ]
}



class App extends Component {

  state = initialState;


 render() {
    return (
      <div>
      <div className="game-Board">
        <Spaceship spaceShip={this.state.spaceShip1}/>
        // <Spaceship spaceShip={this.state.spaceShip2}/>
      </div>
      <div className="game-Board">
      </div>
    </div>
    );
  }

}

export default App;
