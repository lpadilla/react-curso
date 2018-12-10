import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Gasto extends Component {

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

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}

export default Gasto;