import React, { useState } from 'react'

export default function ContadorHooks(props) {

    const [contador, setContador] = useState(0);

    const sumar = () => setContador( contador + 1 )

    const restar = () => setContador( contador - 1 )

    return (
        <div>
            <h3>Contador usando Hooks</h3>
            <h3>Contador de {props.titulo}</h3>
            <h2>{contador}</h2>
            <nav>
                <button onClick={restar}>-</button>
                <button onClick={sumar}>+</button>
            </nav>
        </div>
    )
}

ContadorHooks.defaultProps = {

    titulo:'Clicks'
}
