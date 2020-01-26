import React, { Component } from 'react';
import SpaceShip from './SpaceShip';

const DefaultState = {
    MaxNumeroDeNaves: 6,
    ListaDeNaves: []
}
const getRandomSpaceShipCoordenates = (maxX, maxY) => {
    let min = 0;
    // let max = 9;
    let x = Math.floor((Math.random()*(maxX-min+1)+min))*10;
    let y =  Math.floor((Math.random()*(maxY-min+1)+min))*10;
    return [x,y]
}
const getRandomSpaceShipLargo = () => {
    let min = 1;
    let max = 4;
    let largo = Math.floor((Math.random()*(max-min+1)+min));
    return largo
}
const getRandomSpaceShipOrientacion = () => {
    let min = 1;
    let max = 2;
    let opcion = Math.floor((Math.random()*(max-min+1)+min));
    if( opcion === 1 ){
        return "H"
    }else if( opcion === 2 ){
        return "V"
    }
}
const getRandomSpaceShipState = () => {     // Con esta función, creamos Naves que no sobresalen del Board
    const largo = getRandomSpaceShipLargo()
    const orientacion = getRandomSpaceShipOrientacion()
    if( orientacion === "H" ){
        const coordenatesSpaceShip = getRandomSpaceShipCoordenates(9-largo,9)
        return [coordenatesSpaceShip, largo, orientacion]
    }else if( orientacion === "V" ){
        const coordenatesSpaceShip = getRandomSpaceShipCoordenates(9,9-largo)
        return [coordenatesSpaceShip, largo, orientacion]
    }
}

class BoardBattle extends Component {
    constructor(props) {
        super(props);
        this.state = typeof this.props.state === 'undefined' ? DefaultState : this.props.state;
        
        this.printState = this.printState.bind(this);
        ;
    }
    printState(){
        console.log(this.state);
    }
    render() { 
        let listDivSpaceShip = this.state.ListaDeNaves;    //[];
        for (var i = 0; i < this.state.MaxNumeroDeNaves; i++) {
            const configuracionSpaceShip = getRandomSpaceShipState()
            const coordenatesSpaceShip = configuracionSpaceShip[0]
            const largo = configuracionSpaceShip[1]
            const orientacion = configuracionSpaceShip[2]
            console.log(coordenatesSpaceShip + " " + largo + " " + orientacion)
            listDivSpaceShip.push(
                <SpaceShip state={{coordenada_X: coordenatesSpaceShip[0], coordenada_Y: coordenatesSpaceShip[1] ,largo: largo, orientacion: orientacion}}/>
            )
            this.state.ListaDeNaves = listDivSpaceShip
        }
        // console.log(this.state.ListaDeNaves)
        // this.setState({      // No ocupo esto ya que renderiza infinito
        //     ListaDeNaves: listDivSpaceShip
        // });
        return ( 
            <div className="game-Board">
                {listDivSpaceShip}
                {/* <SpaceShip />
                <SpaceShip state={{coordenada_X: 50, coordenada_Y: 50 ,largo: 3, orientacion: "V"}}/>
                <SpaceShip state={{coordenada_X: 20, coordenada_Y: 70 ,largo: 2, orientacion: "H"}}/>
                <SpaceShip state={{coordenada_X: 90, coordenada_Y: 90 ,largo: 1, orientacion: "H"}}/> */}
            </div>
        );
    }
}
 
export default BoardBattle;