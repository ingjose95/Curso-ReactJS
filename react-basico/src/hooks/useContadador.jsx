import { useState } from 'react';

const UseContadador = (initialValue) => {

    const [valor, setValor] = useState(initialValue);

    const sumar = () => {

        setValor(valor + 1)
    }

    const restar = () => {

        setValor(valor - 1)
    }

    const eliminar = () => {

        setValor(initialValue)
    }


    return [

        valor,
        sumar,
        restar,
        eliminar,
    ]



;
}

export default UseContadador;
