import React,{Component} from 'react';

export default class Gasto extends Component {

    render() {
        const {cantidadGasto, nombreGasto} = this.props.gasto;
        return (
            <ul className="gastos">
                <p>
                    {nombreGasto}
                    <span>$ {cantidadGasto}</span>
                </p>
            </ul>
        );
    }
}