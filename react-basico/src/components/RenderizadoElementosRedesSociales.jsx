import React, { Component } from 'react';
import dataRedes from '../helpers/dataRedes.json';

function ElementosRedesSociales(props) {

    return (

        <li>
            <a href={props.redSocial.web} target='_blank' rel='noreferrer'>
                <button>{props.redSocial.nombre}</button>
            </a>
        </li>
    )
}

export default class RenderizadoElementosRedesSociales extends Component{

    constructor(props) {
        super(props);
        this.state = {
            redesSociales: ['Facebook', 'Twitter', 'TikTok', 'Youtube']
        }
    }

    render() {

        //console.log(dataRedes)
        return (
            <div>
                <h1>Renderizado condicional de elementos:</h1>
                <ul>
                    {
                        this.state.redesSociales.map((red, index) => 
                        <li key={index}>{red}</li>)
                    }
                </ul>
                <h3>Redes Sociales más populares</h3>
                <ol>
                    {
                        dataRedes.RedesSociales.map((redSocial) => <ElementosRedesSociales redSocial={redSocial} key={redSocial.id}></ElementosRedesSociales>)

                    }
                </ol>
            </div>
        )
    }
}