import React, { Component } from 'react';
import data from '../../src/helpers/data.json'


function ElementoLista(props) {
    return(
            <li>
                <a href={props.el.web} target="_blank" rel='noreferrer'>{props.el.name}</a>
            </li>
    )
}

export default class RenderizadoElementos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            estaciones: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
        }
    }

    render() {
        console.log(data)
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {
                        this.state.estaciones.map((elemento, index) => (
                            <li key={index}>{elemento}</li>
                        ))
                    }
                </ol>
                <h3>Frameworks FrontEnd JavaScript</h3>
                <ul>
                    {
                        data.frameworks.map((el) => <ElementoLista key={el.id} el={el}></ElementoLista>)
                    }
                </ul>
            </div>
        )
    }
}