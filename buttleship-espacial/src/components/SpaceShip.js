import React, { Component } from 'react';

class SpaceShip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posicion_X: typeof this.props.state === 'undefined' ? 0 : this.props.state.posicion_X,    //0,
            posicion_Y: typeof this.props.state === 'undefined' ? 0 : this.props.state.posicion_Y,
            largo: typeof this.props.state === 'undefined' ? 4 : this.props.state.largo,
            orientacion: typeof this.props.state === 'undefined' ? "X" : this.props.state.orientacion
        }
        this.printSpaceShip = this.printSpaceShip.bind(this);
        ;
    }
    printSpaceShip(){
        console.log(this.props);
        console.log(this.props.posicion_X);
        console.log(this.props.posicion_Y);
        console.log(this.props.largo);
        console.log(this.props.orientacion);
        console.log("---")
        console.log(this.state.posicion_X);
        console.log(this.state.posicion_Y);
        console.log(this.state.largo);
        console.log(this.state.orientacion);
    }
    render() { 
        let array = [];
        if( this.state.orientacion === "X" ){
            for (var i = 0; i < this.state.largo; i++) {
                // console.log("i: "+i);
                const style = {
                    left: `${this.state.posicion_X+10*i}%`,
                    top: `${this.state.posicion_Y}%`
                }
                array.push(
                    <div className="spaceship" key={i} style={style}></div>
                )
            }
        }else if( this.state.orientacion === "Y" ){
            for (i = 0; i < this.state.largo; i++) {
                // console.log("i: "+i);
                const style = {
                    left: `${this.state.posicion_X}%`,
                    top: `${this.state.posicion_Y+10*i}%`
                }
                array.push(
                    <div className="spaceship" key={i} style={style}></div>
                )
            }
        }
        return (
            <div onClick={this.printSpaceShip}>
                {array}
            </div>
        )
    }
}
 
export default SpaceShip;