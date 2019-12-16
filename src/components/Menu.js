import React from 'react';





class Menu extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            aberto: false,
        }
    }


    clicado = (estacao) => {
        console.log(estacao);
        this.props.mudarEstacao(estacao);
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
                        <li onClick={() => {this.clicado(estacao)}} class="estacao-cont">
                            <a>{estacao}</a>
                        </li>
                    );
                })}
            </div>

        )
    }
}

export default Menu;