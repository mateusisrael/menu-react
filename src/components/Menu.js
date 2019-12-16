import React from 'react';
import { directive } from '@babel/types';
import Inverno from './estacoes/Inverno';
import Outono from './estacoes/Outono';
import Primavera from './estacoes/Primavera';
import Verao from './estacoes/Verao';



class Menu extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            aberto: false,
        }
    }

    clicado = () => {
        console.log('Clicado');

    }

    abrirFecharMenu = () => {
        
        this.setState({
            aberto: !this.state.aberto, 
        })
    }

    render() {
        return(
            <div onClick={() => { this.abrirFecharMenu() }}>
                <p  class="menu">&#9776;</p>

                {this.state.aberto && this.props.estacoes.map(estacao => {
                    return(
                        <li class="estacao-cont">
                            <a>{estacao}</a>
                        </li>
                    );
                })}
            </div>

        )
    }
}

export default Menu;