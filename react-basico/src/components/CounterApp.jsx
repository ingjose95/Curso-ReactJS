import React from 'react'
import UseContadador from '../hooks/useContadador'

export default function CounterApp() {

    const [ valor, sumar, restar, eliminar ] = UseContadador(0)


    return (
        <>
            <h1>Contador de Clikcs que inicia en 0</h1>
            <h1>Clikcs: {valor}</h1>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={eliminar}>Reset</button>

        </>
    )
}
