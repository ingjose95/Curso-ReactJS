import React, { Component } from 'react';

function OnLine() {

    return(
        <div>
            <h1>En línea</h1>
        </div>
        
    )
}

function OffLine() {

    return(
        
        <div>
            <h1>Fuera de línea</h1>
        </div>
        
    )
}

export default class RenderizadoCondicional extends Component {

    constructor(props) {
        super(props);
        this.state = {
            session: true,
        }


        setInterval(() => {
            this.setState({
                session: false,
            })
            
        }, 5000);
    }


    render() {
        return(
            <div>
                <h1>Renderizado condicional</h1>
                <p>Su estado es: {this.state.session ? <OnLine></OnLine> : <OffLine></OffLine>}</p>
            </div>
        )
    }
}