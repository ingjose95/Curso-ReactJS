import React from 'react'
import UseCounter from '../hooks/useCounter'

export default function HooksPersonalizadoContador() {

    const [ counter, increment, reset ] = UseCounter(5)



    return (

        <>
        <h1>
            Clicks: {counter}
        </h1>
        <button onClick={increment}>Increment</button>
        <button onClick={reset
        }>Reset</button>

        </>
        
        )
}
