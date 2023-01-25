import React, { Component } from 'react';

export default class Padre extends Component {

    state = {
        contador: 0,
        persona: 'Sin nombre'
    }

    cambiarEstado = (e) => {
        this.setState({
            contador: this.state.contador + 1,
            persona: 'José Meléndez',
        })
    }

    render() {
        return (
            <>
                <h1>Soy un componente padre</h1>
                <Hijo cambiarEstado={this.cambiarEstado} saludo='Hola, soy el hijo #1, desde el padre.'/>
                <Hijo cambiarEstado={this.cambiarEstado} saludo='Hola, soy el hijo #2, desde el padre.'/>
                <h3>Contador: {this.state.contador}</h3>
                <h3>Persona: {this.state.persona}</h3>

            </>
        )
    }
}

function Hijo(props) {
    return (
        <>
            <h3>{props.saludo}</h3>
            <button onClick={props.cambiarEstado}>Cambiar estado del padre</button>
        </>
    )
}