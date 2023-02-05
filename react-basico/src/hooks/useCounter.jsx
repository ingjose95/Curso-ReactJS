import { useState } from "react";

const UseCounter = (intitialValue) => {

    const [counter, setCounter] = useState(intitialValue);


    const increment = () => {

        setCounter(counter + 1);
    }
    

    const reset = () => {

        setCounter(intitialValue)
    }
    
    
    return [

        counter,
        increment,
        reset,
    ]
}

export default UseCounter;
