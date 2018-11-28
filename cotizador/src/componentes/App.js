import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formularios';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';

class App extends Component {
  cotizarSeguro = (datos) => {
    const {marca, year, plan} = datos;

    //monto base de seguro
    let resultado = 2000;

    //obtener diferencia de años
    const diferencia = obtenerDiferenciaAnio(year);

    //por cada año restar el 3% al valor del seguro
    resultado = resultado -(((diferencia * 3) * resultado) / 100);

    //Americano 15%, Europeo 30% y Asiatico 5% de incremento del valor actual
    resultado = calcularMarca(marca)*resultado;

    //el plan del auto basico 20% mas y el completo 50%
    resultado = obtenerPlan(plan)*resultado;

    //para acortar los decimales a 2 y redondea
    resultado = parseFloat(resultado).toFixed(2);
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
