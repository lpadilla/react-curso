import React, { Component } from 'react';
import '../css/index.css';
import Header from './Header.js';
import FormularioGasto from './Formulario';
import Listado from './Listado';
import {validarPresupuesto} from '../helper';
import ControlPresupuesto from './ControlPresupuesto';

class App extends Component {
  state = {
    presupuesto: '',
    restante: '',
    gastos :{}
  }

  agregarGasto = gasto => {
    //tomar una copia del state actual
    const gastos = {...this.state.gastos};

    //agregar el gasto al objeto del state
    //crea un nuevo objeto dentro del state para agregar la informacion 
    //enviada desde el formulario
    gastos[`gastos${Date.now()}`] = gasto; 

    this.calcularRestante(gasto.cantidadGasto);

    //ponerlo en el state
    this.setState({
      gastos
    })

  }


  calcularRestante = cantidad =>{
    let restar = Number(cantidad);

    //copia del state 
    let restante = this.state.restante;

    restante = restante - restar;
 
    restante = String(restante);
    this.setState({
      restante
    });
  }

  componentDidMount(){
    this.obtenerPresupuesto();
  }
  obtenerPresupuesto = () => {
    let presupuesto = prompt("Cual es el presupuesto?");
    let resultado = validarPresupuesto(presupuesto);

    if(resultado){
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      });
    }else{
      this.obtenerPresupuesto();
    }
  }

  render() {
    return (
      <div className="App container">
        <Header 
          title="Gasto Semanal"
        />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <FormularioGasto 
                agregarGasto = {this.agregarGasto}
              />
            </div>
            <div className="one-half column">
              <Listado 
                gastos = {this.state.gastos}
              /> 
              <ControlPresupuesto 
                presupuesto = {this.state.presupuesto}
                restante = {this.state.restante}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
