import React, { useState, useEffect } from 'react'

export default function UsoUseEffect() {

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(count + 1)
    //     }, 1000)
    // }, [count]);


    useEffect(() => {
        setCalculation(() => count * 2)
    }, [count]);


    return (
        <div>
            <h1>Uso de useEffect</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>{calculation}</p>
        </div>
        )
    }
