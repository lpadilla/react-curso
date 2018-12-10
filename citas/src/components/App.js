import React, { Component } from 'react';
import Header from './Header';
import AgregarCitas from './AgregarCita';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Administrador de pacientes de veterinaria"/> 
        <div className="row">
          <div className="col-sm">
            <AgregarCitas />
          </div>
          <div className="col-sm">2</div>
        </div>
      </div>
    );
  }
}

export default App;
