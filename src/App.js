import React from 'react';
import './App.css';
import Menu from './components/Menu';


class App extends React.Component{
  constructor(props) {
    super(props)

    this.estacoes = [
      'outono',
      'primavera',
      'verao',
      'inverno',
    ]

    this.estaco_selecionada = '';
  }

  render () {
    return(
        <div className="App">
          <Menu estacoes={this.estacoes}/>
        </div>
      );
    }
}

export default App;
