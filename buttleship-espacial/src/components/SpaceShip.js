import React, { Component } from 'react';

const ColoresLargoSpaceShip = {
    1: "red",
    2: "yellow",
    3: "blue",
    4: "green"
}
const DefaultState = {
    coordenada_X: 0,
    coordenada_Y: 0,
    largo: 4,
    orientacion: "H",
    colorSpaceShip: "black" //ColoresLargoSpaceShip[largo]
}


class SpaceShip extends Component {
    // El constructor es un método que se llama automáticamente durante la creación de un objeto desde una clase. Puede manejar sus cosas de configuración inicial, como el incumplimiento de algunas propiedades del objeto, o la comprobación de los argumentos que se pasaron. Simplemente, el constructor ayuda a construir cosas.
    // Ya para la inicialización de estado, se define en el constructor, con lo que se ejecutará para cada componente instanciado de manera independiente.
    constructor(props) {
        super(props);
        // this.state = {
        //     coordenada_X: this.props.state.coordenada_X,    //0,
        //     coordenada_Y: this.props.state.coordenada_Y,
        //     largo: this.props.state.largo,
        //     orientacion: this.props.state.orientacion
        // }

        // El constructor es el único lugar donde debe asignar el estado local directamente así. En cualquier otro lugar de nuestro componente, debe confiar en setState () en su lugar.
        this.state = typeof this.props.state === 'undefined' ? DefaultState : this.props.state;        // El constructor de su componente es el lugar perfecto para establecer el estado inicial de su componente. En lugar de usar setState () como lo haría en otros métodos en su clase, deberá establecer el estado inicial directamente:
        this.state.colorSpaceShip = ColoresLargoSpaceShip[this.state.largo]

        // Recomendado: Vincula eventos en un solo lugar
        this.printState = this.printState.bind(this);
        ;
    }
    // Podemos declarar métodos especiales en la clase del componente para ejecutar algún código cuando un componente se monta y desmonta:
    // El método componentDidMount() se ejecuta después que la salida del componente ha sido renderizada en el DOM. Este es un buen lugar para configurar un temporizador:
    componentDidMount() {
        // this.timerID = setInterval(
        //     () => this.tick(),
        //     1000
        // );
    }
    // Si el componente se elimina en algún momento del DOM, React invoca al método de ciclo de vida componentWillUnmount()
    componentWillUnmount() {
        // clearInterval(this.timerID);
    }
    
    // tick() {
    //     this.setState({ // Utilizará this.setState() para programar actualizaciones al estado local del componente.
    //          date: new Date()
    //     });
    // }

    printState(){
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
        let listDiv = [];
        for (var i = 0; i < this.state.largo; i++) {
            console.log("i: "+i);
            console.log("this.state.colorSpaceShip: "+this.state.colorSpaceShip);
            if( this.state.orientacion === "H" ){
                const style = {
                    left: `${this.state.coordenada_X+10*i}%`,
                    top: `${this.state.coordenada_Y}%`,
                    backgroundColor: `${this.state.colorSpaceShip}`
                }
                listDiv.push(
                    <div className="spaceship" key={i} style={style}></div>
                )
            }else if( this.state.orientacion === "V" ){
                const style = {
                    left: `${this.state.coordenada_X}%`,
                    top: `${this.state.coordenada_Y+10*i}%`,
                    backgroundColor: `${this.state.colorSpaceShip}`
                }
                listDiv.push(
                    <div className="spaceship" key={i} style={style}></div>
                )
            }
        }
        return (
            <div onClick={this.printState}>
                {listDiv}
            </div>
        )
    }
}
 
// Una vez tenemos la clase, nos tenemos que preocupar de exportarla, para que se conozca desde fuera de este módulo. Esto se consigue con la sentencia "export" de ES6.
export default SpaceShip;

// la inicialización de propiedades se hace una vez definida la clase, mediante una propiedad que usamos dentro de la propia clase. Al no estar en el código de la clase, se ejecutará una única vez.
// SpaceShip.defaultProps = {
//     props: {
//         coordenada_X: 0,
//         coordenada_Y: 0,
//         largo: 4,
//         orientacion: "H"
//     }   // 'Valor por defecto definido para la propiedad'
//   }