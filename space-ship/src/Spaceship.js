import React, { Component } from 'react';

class Spaceship extends Component {
  constructor(props){
    super(props);
    this.posicion_X = props.spaceShipState.posicion[0];
    this.posicion_Y = props.spaceShipState.posicion[1];
    this.largo = props.spaceShipState.largo;
    this.orientacion = props.spaceShipState.orientacion;
    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent(){
    console.log(this.props);
    console.log(this.posicion_X);
    console.log(this.posicion_Y);
    console.log(this.largo);
    console.log(this.orientacion);
  }
  render() {
    let array = [];
    if( this.orientacion === "X" ){
      for (var i = 0; i < this.largo; i++) {
        // console.log("i: "+i);
        const style = {
          left: `${this.posicion_X+10*i}%`,
          top: `${this.posicion_Y}%`
        }
        array.push(
          <div className="spaceship" key={i} style={style}></div>
        )
      }
    }
    else if( this.orientacion === "Y" ){
      for (var i = 0; i < this.largo; i++) {
        console.log("i: "+i);
        const style = {
          left: `${this.posicion_X}%`,
          top: `${this.posicion_Y+10*i}%`
        }
        array.push(
          <div className="spaceship" key={i} style={style}></div>
        )
      }
    }
    return (
    <div>
      {array}
    </div>
    )


  }
}

export default Spaceship;