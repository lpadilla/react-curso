import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formularios';

class App extends Component {
  cotizarSeguro = (datos) => {
    console.log(datos);
  }


  render() {
    return (
      <div className="App">
        <Header title="Cotizador de seguro de Auto"/>
        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro}/>
        </div>
      </div>
    );
  }
}

export default App;
