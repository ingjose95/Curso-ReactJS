import React, { Component } from 'react';

class ComponenteClase extends Component {

    constructor(props) {
        super(props)
        this.msg = 'Hola, estoy saludando desde el constructor.';
        this.persona = {
            nombre: 'José',
            apellido: 'Rodriguez',
        }
    }

    

    render() {

        return (
            <>
                <h1>Hola, este es un componente de clase.</h1>
                <h2>{this.msg}</h2>
                <h3>{this.props.saludo}</h3>
                <h4>Hola, soy {this.persona.nombre} y estoy haciendo un componente de clase. Por cierto, mi apellido es {this.persona.apellido}.</h4>
            </>
        )
    }
}

export default ComponenteClase;