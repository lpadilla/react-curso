import React, {Component} from 'react';

class Formulario extends Component{
    //ref son para leer los valores de los formularios
    // y se asocian directamente en los campos en el form
    marcaRef = React.createRef();
    yearRef = React.createRef();
    basicoRef = React.createRef();
    completoRef = React.createRef();

    //El metodo del submit del form
    cotizarSeguro = (e) => {
        e.preventDefault();

        //obtener los datos
        const marca = this.marcaRef.current.value;
        const year = this.yearRef.current.value
        const plan = this.basicoRef.current.checked ? 'basico' : 'completo';

        //crear objeto
        const infoAuto = {
            marca: marca,
            year: year,
            plan: plan
        };

        //enviar al componente principal
        this.props.cotizarSeguro(infoAuto);
    }


    render() {
        return (
            <form className="cotizar-auto" onSubmit={this.cotizarSeguro}>
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.marcaRef}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.yearRef}>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" ref={this.basicoRef} name="plan" value="basico"/> Básico
                    <input type="radio" ref={this.completoRef} name="plan" value="completo"/> Completo
                </div>

                <button type="submit" className="boton">Cotizar</button>
            </form>
        );
    }
}

export default Formulario;