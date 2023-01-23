import React, { Component } from 'react'

export class EventosClaseES6 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        }

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);

    }

    sumar(e) {
        e.preventDefault()
        console.log('Sumando');
        console.log(this);
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar(e) {
        e.preventDefault()
        console.log('Restando');
        console.log(this);
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {
        return (
            <div>
                <h2>Este es un evento desde ES6</h2>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
                <h2>{this.state.contador}</h2>
            </div>
    )
    }
}

export class EventosClaseES7 extends Component {

    state = {
        contador: 0,
    }

    sumar = (e) => {
        e.preventDefault();
        console.log('Sumando');
        console.log(this);
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar = (e) => {
        e.preventDefault();
        console.log('Restando');
        console.log(this);
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {
        return(
            <div>
                <h2>Este es un evento desde ES7</h2>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
                <h1>{this.state.contador}</h1>
            </div>
        )
    }
}

// function Boton( {myOnClick} ) {
//     return (
//         <div>
//             <button onClick={myOnClick}>Botón echo componente</button>
//         </div>
//     )
// }

// const Boton = ({ myOnClick }) => {

//     return <button onClick={myOnClick}>Botón echo componente</button>
// }

const Boton = ( { myOnClick }) => (
    <button onClick={myOnClick}>Botón echo componente</button>
)




export class MasSobreEventos extends Component{

    handleClick = (e, mensaje) => {

        console.log(e);
        console.log(e.target);
        console.log(e.nativeEvent.target);
        console.log(mensaje);

    }

    render() {
        return(
            <div>
                <h2>Mas sobre eventos</h2>
                <button onClick={(e) => this.handleClick(e,'Hola, pasando parametro desde un evento')}>Saludar</button>
                <Boton myOnClick={(e) => this.handleClick(e, 'Hola, pasando parametro desde un evento')}></Boton>
    
            </div>
            )
    }

}