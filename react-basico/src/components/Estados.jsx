import React, { Component } from 'react';

function EstadoHijo(props){
    return(
        <div>
            <h2>{props.contadorHijo}</h2>
        </div>
    )
}

export default class Estados extends Component{

    constructor(props){
        super(props);
        this.state = {
            contador: 0,
            contador2: 2,
            contador10: 10,
            nombre:'Jose Melendez'
        }

        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1,
                contador2: this.state.contador2 + 2,
                contador10: this.state.contador10 + 10,
                nombre: 'Lila Rodriguez',
            })
            
        }, 1000);

    
    }

    render() {
        return(
            <div>
                <h2>El State2.0</h2>
                <p>{this.state.contador}</p>
                <p>{this.state.contador2}</p>
                <p>{this.state.contador10}</p>
                <p>{this.state.nombre}</p>
                <EstadoHijo contadorHijo={this.state.contador10}></EstadoHijo>
            </div>
        )
    }
}