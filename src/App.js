import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Inverno from './components/estacoes/Inverno';
import Outono from './components/estacoes/Outono';
import Primavera from './components/estacoes/Primavera';
import Verao from './components/estacoes/Verao';


class App extends React.Component{
  constructor(props) {
    super(props)


    this.state = {
      estacoes: [
        'outono',
        'primavera',
        'verao',
        'inverno',
      ],
  
      estacao_selecionada: ''
    }

  }

  mudarEstacao = (estacao) => {
    this.setState({
      estacao_selecionada: estacao,
    })


  }

  rendereizarEstacao = () => {
    switch(this.state.estacao_selecionada) {
      case "inverno": 
        return <Inverno/>
      case "outono":
        return <Outono/>
      case "primavera":
        return <Primavera/>
      case "verao":
        return <Verao/>

    }
  }

  render () {
    return(
        <div className="App">
          <Menu
            estacoes={this.state.estacoes}
            mudarEstacao={this.mudarEstacao}
          />
          {this.rendereizarEstacao()}
        </div>
      );
    }
}

export default App;
