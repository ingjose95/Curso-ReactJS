import React from 'react'
import UseContadador from '../hooks/useContadador'


export default function CounterApp10() {

    const [ valor, sumar, restar, eliminar ] = UseContadador(10)


    return (
        <>
            <h1>Contador de Clicks que inicia en 10</h1>
            <h1>Clicks: {valor}</h1>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={eliminar}>Reset</button>
        </>
    )
}
