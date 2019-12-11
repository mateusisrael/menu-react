import React from 'react';


class Menu extends React.Component{



    clicado = () => {
        console.log('Clicado');
    }

    render() {
        return(
            <div onClick={() => { this.clicado() }}>
                <p>&#9776;</p>
                {this.props.estacoes.map(estacao => {
                    return(
                        <p>{estacao}</p>
                    );
                })}
            </div>
        )
    }
}

export default Menu;