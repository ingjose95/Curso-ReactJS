import React, { useState } from 'react'

export default function SesionHooks() {

    const [sesion, setSesion] = useState(false);

    const iniciarSesion = () => setSesion(true)
    const salirSesion = () => setSesion(false)


    return (
        <div>
            <h3>Sesion-Hooks</h3>
            {sesion
            ? <h4>Sesión activa</h4>
            : <h4>Fuera de sesión</h4>
            }
            <button onClick={iniciarSesion}>Iniciar sesión</button>
            <button onClick={salirSesion}>Salir de sesión</button>
        </div>
        )
}
