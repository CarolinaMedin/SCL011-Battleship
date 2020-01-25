import React, { Component } from 'react';

const InitialState = {
    coordenada_X: 0,
    coordenada_Y: 0,
    largo: 4,
    orientacion: "H"
}


class SpaceShip extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     coordenada_X: this.props.state.coordenada_X,    //0,
        //     coordenada_Y: this.props.state.coordenada_Y,
        //     largo: this.props.state.largo,
        //     orientacion: this.props.state.orientacion
        // }
        this.state = typeof this.props.state === 'undefined' ? InitialState : this.props.state;
        this.printSpaceShip = this.printSpaceShip.bind(this);
        ;
    }
    printSpaceShip(){
        console.log(this.props);
        console.log(this.props.coordenada_X);
        console.log(this.props.coordenada_Y);
        console.log(this.props.largo);
        console.log(this.props.orientacion);
        console.log("---")
        console.log(this.state.coordenada_X);
        console.log(this.state.coordenada_Y);
        console.log(this.state.largo);
        console.log(this.state.orientacion);
    }
    render() { 
        let array = [];
        for (var i = 0; i < this.state.largo; i++) {
            // console.log("i: "+i);
            if( this.state.orientacion === "H" ){
                const style = {
                    left: `${this.state.coordenada_X+10*i}%`,
                    top: `${this.state.coordenada_Y}%`
                }
                array.push(
                    <div className="spaceship" key={i} style={style}></div>
                )
            }else if( this.state.orientacion === "V" ){
                const style = {
                    left: `${this.state.coordenada_X}%`,
                    top: `${this.state.coordenada_Y+10*i}%`
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