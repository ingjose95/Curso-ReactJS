import React from 'react';
import PropTypes from 'prop-types'

export default function PropiedadesP (props) {


    return (

        <>
            <h1>{props.porDefecto}</h1>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? 'True' : 'False'}</li>
                <li>{props.array.join(',')}</li>
                <li>Nombre: {props.objeto.nombre} - Apellido: {props.objeto.apellido}</li>
                <li>{props.array.map(props.funcion).join(',')}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>

        </>
    )
}

PropiedadesP.defaultProps = {

    porDefecto: 'Hola, soy un mensaje por defecto.'

}

PropiedadesP.propTypes = {

    numero: PropTypes.number.isRequired,
}
