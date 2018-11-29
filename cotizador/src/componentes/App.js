import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formularios';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';
import Resumen from './Resumen';
import Resultado from './Resultado';

class App extends Component {
  state = {
    resultado: '',
    datos:{}
  }

  cotizarSeguro = (datos) => {
    const {marca, year, plan} = datos;    
    let resultado = 2000; //monto base de seguro

    const diferencia = obtenerDiferenciaAnio(year);

    //por cada año restar el 3% al valor del seguro
    resultado = resultado -(((diferencia * 3) * resultado) / 100);

    //Americano 15%, Europeo 30% y Asiatico 5% de incremento del valor actual
    resultado = calcularMarca(marca)*resultado;

    //el plan del auto basico 20% mas y el completo 50%
    resultado = obtenerPlan(plan)*resultado;

    //para acortar los decimales a 2 y redondea
    resultado = parseFloat(resultado).toFixed(2);

    //crear array para el resumen
    const datosAuto = {
      marca: marca,
      year: year,
      plan: plan
    }
    //se agregan estos datos al state
    this.setState({
      resultado: resultado,
      datos: datosAuto
    });
  }


  render() {
    return (
      <div className="contenedor">
        <Header title="Cotizador de seguro de Auto"/>
        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro}/>
          <Resumen datos={this.state.datos} resultado={this.state.resultado} />
          <Resultado resultado={this.state.resultado} />
        </div>
      </div>
    );
  }
}

export default App;
