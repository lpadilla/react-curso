import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formularios';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Cotizador de seguro de Auto"/>
        <div className="contenedor-formulario">
          <Formulario />
        </div>
      </div>
    );
  }
}

export default App;
