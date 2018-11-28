import React, {Component} from 'react';

class Producto extends Component {
    render() {
        const {name, price} = this.props.product;
        return (
            <ul>
                <li>Nombre: {name}</li>
                <li>Precio: {price}</li>
            </ul>
        );
    }
}
export default Producto;